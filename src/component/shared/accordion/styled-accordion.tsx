import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import {styled} from '@mui/material/styles';

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: `2px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:first-of-type': {
    borderRadius: '5px 5px 0 0',
  },
  '&:last-of-type': {
    borderRadius: '0 0 5px 5px',
  },
  '&::before': {
    display: 'none',
  },
}));

export default StyledAccordion;
