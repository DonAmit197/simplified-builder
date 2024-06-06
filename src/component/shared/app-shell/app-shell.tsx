import Box from '@mui/material/Box';
import {ReactNode} from 'react';
import classes from './app-shell.module.scss';

interface AppShellProps {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
}

const AppShell = (props: AppShellProps) => {
  return (
    <Box className={classes.appShell}>
      <Box role='navigation' className={`${classes.child} ${classes.sidebar}`}>{props.sidebar ?? <></>}</Box>
      <Box className={classes.main}>
        {props.header ? <Box role='banner' className={`${classes.child} ${classes.header}`}>{props.header}</Box> : null}
        <Box className={`${classes.child} ${classes.content}`}>{props.main}</Box>
        {props.footer ? <Box role='footer' className={`${classes.child} ${classes.footer}`}>{props.footer}</Box> : null}
      </Box>
    </Box>
  );
}

export default AppShell;
