import {cyan, grey} from '@mui/material/colors';

export function getBackgroundColor(isDark: boolean): string {
  return isDark ? grey[900] : cyan[50];
}

export function getMessageBorderColor(isDark: boolean): string {
  return isDark ? grey[600] : grey[400];
}

export function getMessageBackgroundColor(isDark: boolean): string {
  return isDark ? grey[800] : grey[100];
}
