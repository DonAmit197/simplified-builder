import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import {useEffect, useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {FormCategory} from 'src/__generated__/graphql.ts';
import StyledButton from 'src/component/shared/basic-controls/button/styled-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {FormService} from 'src/services/form.service.ts';
import {useFormStore} from 'src/store/form-store.ts';
import {useReloadStore} from 'src/store/reload-store.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

interface ISetupFormInput {
  formName: string;
  dataType: string;
  emailAddresses: string;
  formCategory: number;
}

interface IDataType {
  name: string;
  value: string;
  disabled: boolean;
}

const FormSetupPage = () => {
  const forceReload = useReloadStore((state) => state.forceReload);
  const {setName, setUrl} = useFormStore();

  const [categories, setCategories] = useState<FormCategory[]>([
    {
      id: -1,
      name: 'All Forms',
    },
  ]);

  const dataTypes = useMemo<IDataType[]>(
    () => [
      {
        name: 'Email mode',
        value: 'email',
        disabled: false,
      },
      {
        name: 'Business Connect Portal',
        value: 'bc',
        disabled: true,
      },
      {
        name: 'API',
        value: 'api',
        disabled: true,
      },
    ],
    []
  );

  const navigate = useNavigate();
  const formService = new FormService();
  const {setInitialState} = useThemeStore();

  useEffect(() => {
    setInitialState('Set up your form');
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      formName: '',
      dataType: 'email',
      emailAddresses: '',
      formCategory: -1,
    },
  });

  useEffect(() => {
    formService.getFormCategories().then((result) => setCategories(result));
  });

  const onSubmit = (data: ISetupFormInput) => {
    const date = dayjs();

    forceReload(RoutesEnum.Builder);

    setName(data.formName);
    const strippedName = data.formName.replace(/[^a-zA-Z0-9]/g, '');
    setUrl(`prod.formbuilder.govt.nz/${strippedName}${date.format('DDMMYYYY')}`);

    navigate(`/${RoutesEnum.Builder}`.replace(':id', '1'));
  };

  return (
    <Box className='mainHeader' sx={{width: '100%'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={3}
          sx={{
            marginTop: '30px',
            alignItems: 'start',
          }}>
          <Controller
            name='formName'
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <TextField
                aria-label='Form name'
                label={errors.formName ? 'Form name required' : 'Form name'}
                error={errors.formName !== undefined}
                {...field}
                sx={{width: '400px'}}
              />
            )}
          />
          <Controller
            name='formCategory'
            control={control}
            render={({field}) => (
              <FormControl>
                <InputLabel id='form-category-label'>Form category</InputLabel>
                <Select {...field} labelId='form-category-label' label='Form category' sx={{width: '400px'}}>
                  {categories?.map((c) => (
                    <MenuItem key={c.id} value={c.id} aria-label={c.name}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name='dataType'
            control={control}
            render={({field}) => (
              <FormControl>
                <FormLabel id='data-radio-buttons-group-label'>How to receive your data?</FormLabel>
                <RadioGroup
                  {...field}
                  aria-labelledby='data-radio-buttons-group-label'
                  aria-label='Data type'
                  sx={{width: '400px'}}>
                  {dataTypes.map((d) => (
                    <FormControlLabel
                      control={<Radio />}
                      key={d.value}
                      label={d.name}
                      value={d.value}
                      disabled={d.disabled}
                      aria-label={d.name}
                      sx={{
                        paddingY: '10px',
                        '&:not(:last-child)': {
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
          <Controller
            name='emailAddresses'
            control={control}
            render={({field}) => (
              <TextField
                label='Email where data will be sent'
                aria-label='Email addresses where data will be sent to'
                helperText='Up to 3 emails'
                {...field}
                sx={{width: '400px'}}
              />
            )}
          />
          <StyledButton type='submit' variant='contained'>
            Start building
          </StyledButton>
        </Stack>
      </form>
    </Box>
  );
};

export default FormSetupPage;
