import CircleIcon from '@mui/icons-material/Circle';
import PentagonIcon from '@mui/icons-material/Pentagon';
import {Box, Divider, useTheme} from '@mui/material';
import {cyan, grey} from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useEffect, useState} from 'react';
import {FormCategoryCount} from 'src/__generated__/graphql.ts';
import StyledListItemButton from 'src/component/shared/button/styled-list-item-button.tsx';
import {FormService} from 'src/services/form.service.ts';

export interface IFormCategoryCountProps {
  selectedCategory: number;

  setSelectedCategory(categoryId: number): void;
}

const FormCategoryCountComponent = ({selectedCategory, setSelectedCategory}: IFormCategoryCountProps) => {
  const [categories, setCategories] = useState<FormCategoryCount[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const formService = new FormService();

  const isDark = useTheme().palette.mode === 'dark';
  const background = isDark ? grey[900] : cyan[50];

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
        <Divider
          sx={{
            borderBottomWidth: '2px',
            opacity: '1',
            marginX: '30px',
          }}
        />
      </List>
    </Box>
  );
};

export default FormCategoryCountComponent;
