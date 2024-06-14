import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import {Box, IconButton, InputAdornment, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import FormCategoryCountComponent from 'src/component/my-forms/form-category-count.tsx';
import FormGrid from 'src/component/my-forms/form-grid.tsx';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useDebounce} from 'use-debounce';

const MyFormsPage = () => {
  const nav = () => {
    window.location.href += RoutesEnum.Builder;
  };

  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText] = useDebounce(searchText, 500);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        paddingRight: '30px',
        display: 'flex',
        flexGrow: 1,
      }}>
      <FormCategoryCountComponent selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <Box sx={{flexDirection: 'column', flexGrow: 1, marginLeft: '30px'}}>
        <Box className='headerWithItem'>
          <Box className='mainHeader'>
            <Typography variant='h1'>My Forms</Typography>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextField
              sx={{marginRight: '20px'}}
              size='small'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              label='Search by title'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setSearchText('')}
                      sx={{visibility: searchText === '' ? 'hidden' : 'visible'}}>
                      <CancelIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledButton startIcon={<AddIcon />} variant='contained' onClick={() => nav()}>
              Create New Form
            </StyledButton>
          </Box>
        </Box>

        <FormGrid selectedCategory={selectedCategory} searchText={debouncedSearchText} />
      </Box>
    </Box>
  );
};

export default MyFormsPage;
