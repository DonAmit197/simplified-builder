import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircleIcon from '@mui/icons-material/Circle';
import PentagonIcon from '@mui/icons-material/Pentagon';
import {Box, Divider, IconButton, InputAdornment, TextField, useTheme} from '@mui/material';
import {cyan, grey} from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useEffect, useState} from 'react';
import {FormCategoryCount} from 'src/__generated__/graphql.ts';
import StyledListItemButton from 'src/component/shared/basic-controls/button/styled-list-item-button.tsx';
import {FormService} from 'src/services/form.service.ts';

export interface IFormCategoryCountProps {
  selectedCategory: number;

  setSelectedCategory(categoryId: number): void;
}

const FormCategoryCountComponent = ({selectedCategory, setSelectedCategory}: IFormCategoryCountProps) => {
  const [categories, setCategories] = useState<FormCategoryCount[]>([]);
  const [newCategory, setNewCategory] = useState<string>('');
  const formService = new FormService();

  const isDark = useTheme().palette.mode === 'dark';
  const background = isDark ? grey[900] : cyan[50];

  const addNewCategory = () => {
    if (newCategory === '') {
      return;
    }

    const maxId = categories.length + 1;
    categories.push({
      formCategory: {
        id: maxId,
        name: newCategory,
      },
      formCount: 0,
    });

    setCategories(categories);
    setNewCategory('');
  };

  useEffect(() => {
    formService.getFormCategoryCounts().then((result) => {
      setCategories(result);
      setSelectedCategory(-1);
    });
  }, []);

  return (
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
              <ListItemIcon>{item.formCategory.id === -1 ? <PentagonIcon /> : <CircleIcon />}</ListItemIcon>
              <ListItemText
                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                primary={<Box sx={{marginRight: '50px'}}>{item.formCategory.name}</Box>}
                secondary={item.formCount}
              />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <TextField
        sx={{margin: '20px 25px'}}
        size='small'
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        label='Add new category'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={() => addNewCategory()} sx={{visibility: newCategory === '' ? 'hidden' : 'visible'}}>
                <AddCircleIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Divider
        sx={{
          borderBottomWidth: '2px',
          opacity: '1',
          marginX: '20px',
        }}
      />
    </Box>
  );
};

export default FormCategoryCountComponent;
