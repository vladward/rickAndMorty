import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  home: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '350px',
    paddingBottom: '40px',
  },
});
