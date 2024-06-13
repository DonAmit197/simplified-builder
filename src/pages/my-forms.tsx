import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SecurityIcon from '@mui/icons-material/Security';
import {Box, Chip, IconButton, Stack, Typography} from '@mui/material';
import {MaterialReactTable, MRT_ColumnDef, useMaterialReactTable} from 'material-react-table';
import {useEffect, useMemo, useState} from 'react';
import {Form} from 'src/__generated__/graphql.ts';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {FormService} from 'src/services/form.service.ts';
import {formatDate} from 'src/services/format.service.ts';

const MyFormsPage = () => {
  const nav = () => {
    window.location.href = window.location.href.replace(RoutesEnum.MyForms, RoutesEnum.Builder);
  };

  const [data, setData] = useState<Form[] | null>(null);
  const formService = new FormService();

  useEffect(() => {
    formService.getForms().then((result) => setData(result));
  }, []);

  const columns = useMemo<MRT_ColumnDef<Form>[]>(
    () => [
      {
        accessorKey: 'formSettings.title', //access nested data with dot notation
        header: 'Title',
        size: 200,
        Cell: ({renderedCellValue, row}) => (
          <Stack>
            <Typography variant='body1'>{renderedCellValue}</Typography>
            <Typography variant='body2' sx={{marginTop: '2px'}}>
              Edited {formatDate(row.original.updatedLocal)}
            </Typography>
          </Stack>
        ),
      },
      {
        accessorKey: 'isActive',
        header: 'Is Active',
        size: 300,
        Cell: ({cell}) => {
          const active = cell.getValue<boolean>();
          const label = active ? 'Active' : 'Private';
          const icon = active ? <CheckIcon /> : <SecurityIcon />;
          return <Chip variant='filled' color='primary' label={label} icon={icon} />;
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: data ?? [], //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enablePagination: false,
    enableBottomToolbar: false,
    enableRowActions: true,
    enableTableHead: false,
    enableTopToolbar: false,
    displayColumnDefOptions: {
      'mrt-row-actions': {
        header: 'Actions', //change header text
        size: 10, //make actions column wider
      },
    },
    muiTablePaperProps: {
      sx: {
        boxShadow: 'none',
      },
    },
    positionActionsColumn: 'last',
    renderRowActions: () => (
      <Stack direction='row-reverse' sx={{alignSelf: 'start', alignItems: 'center'}}>
        <IconButton aria-label='More options'>
          <MoreVertIcon />
        </IconButton>
        <Box sx={{borderRight: '2px solid', borderColor: 'grey.500'}}>
          <StyledButton variant='text' aria-label='Edit form'>
            Edit
          </StyledButton>
        </Box>
      </Stack>
    ),
  });

  return (
    <Box sx={{width: '100%'}}>
      <Box className='headerWithItem'>
        <Box className='mainHeader'>
          <Typography variant='h1'>My Forms</Typography>
        </Box>
        <StyledButton startIcon={<AddIcon />} variant='contained' onClick={() => nav()}>
          Create New Form
        </StyledButton>
      </Box>

      <MaterialReactTable table={table} />
    </Box>
  );
};

export default MyFormsPage;
