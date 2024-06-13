import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SecurityIcon from '@mui/icons-material/Security';
import {Box, Chip, IconButton, Stack, Typography, useTheme} from '@mui/material';
import {cyan, grey} from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {MaterialReactTable, MRT_ColumnDef, useMaterialReactTable} from 'material-react-table';
import {useEffect, useMemo, useState} from 'react';
import {Form, FormCategoryCount} from 'src/__generated__/graphql.ts';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import StyledListItemButton from 'src/component/shared/button/styled-list-item-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {FormService} from 'src/services/form.service.ts';
import {formatDate} from 'src/services/format.service.ts';

const MyFormsPage = () => {
  const nav = () => {
    window.location.href = window.location.href.replace(RoutesEnum.Home, RoutesEnum.Builder);
  };

  const [data, setData] = useState<Form[] | null>(null);
  const [categories, setCategories] = useState<FormCategoryCount[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const formService = new FormService();

  const isDark = useTheme().palette.mode === 'dark';
  const background = isDark ? grey[900] : cyan[50];

  useEffect(() => {
    formService.getFormCategoryCounts().then((result) => {
      setCategories(result);
      setSelectedCategory(-1);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory === 0) {
      return;
    }

    formService.getForms(selectedCategory).then((result) => setData(result));
  }, [selectedCategory]);

  const columns = useMemo<MRT_ColumnDef<Form>[]>(
    () => [
      {
        accessorKey: 'formSettings.title', //access nested data with dot notation
        header: 'Title',
        size: 150,
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
        header: 'Actions',
        size: 10,
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
    <Box
      sx={{
        width: '100%',
        height: '100%',
        paddingRight: '30px',
        display: 'flex',
        flexGrow: 1,
      }}>
      <Box
        sx={{
          borderRadius: '0 20px 20px 0',
          borderLeft: '1px solid',
          borderColor: 'divider',
          backgroundColor: background,
          height: '100%',
        }}>
        <List>
          {categories.map((item) => (
            <ListItem key={item.formCategory.id}>
              <StyledListItemButton
                selected={item.formCategory.id === selectedCategory}
                onClick={() => setSelectedCategory(item.formCategory.id)}>
                <ListItemText
                  sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                  primary={<Box sx={{marginRight: '50px'}}>{item.formCategory.name}</Box>}
                  secondary={item.formCount}
                />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{flexDirection: 'column', flexGrow: 1}}>
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
    </Box>
  );
};

export default MyFormsPage;
