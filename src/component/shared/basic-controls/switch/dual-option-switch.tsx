import {Box, Switch, Typography, useTheme} from '@mui/material';
import {getMessageBorderColor} from 'src/services/color.service.ts';

export interface IDualSwitchOptions {
  checked: boolean;
  leftLabel: string;
  rightLabel: string;

  onChange: (value: boolean) => void;
}

const DualOptionSwitch = ({checked, leftLabel, rightLabel, onChange}: IDualSwitchOptions) => {
  const isDark = useTheme().palette.mode === 'dark';
  const borderColor = getMessageBorderColor(isDark);
  const ariaLabel = `Set to ${checked ? leftLabel : rightLabel}`;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingX: '10px',
        border: '1px solid',
        borderColor: borderColor,
        borderRadius: '4px',
      }}>
      <Typography>{leftLabel}</Typography>
      <Switch
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        inputProps={{'aria-label': ariaLabel}}
      />
      <Typography>{rightLabel}</Typography>
    </Box>
  );
};

export default DualOptionSwitch;
