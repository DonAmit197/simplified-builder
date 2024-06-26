import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SecurityIcon from '@mui/icons-material/Security';
import {Box, Chip, IconButton, Stack, Typography} from '@mui/material';
import {MaterialReactTable, MRT_ColumnDef, useMaterialReactTable} from 'material-react-table';
import {useEffect, useMemo, useState} from 'react';
import {Form} from 'src/__generated__/graphql.ts';
import StyledButton from 'src/component/shared/basic-controls/button/styled-button.tsx';
import {FormService} from 'src/services/form.service.ts';
import {formatDate} from 'src/services/format.service.ts';

export interface IFormGridProps {
  selectedCategory: number;
  searchText: string;
}

const FormGrid = ({selectedCategory, searchText}: IFormGridProps) => {
  const [data, setData] = useState<Form[] | null>(null);
  const formService = new FormService();

  useEffect(() => {
    if (selectedCategory === 0) {
      return;
    }

    formService.getForms(selectedCategory, searchText).then((result) => setData(result));
  }, [selectedCategory, searchText]);

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

  return <MaterialReactTable table={table} />;
};

export default FormGrid;
