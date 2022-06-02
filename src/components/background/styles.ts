import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  mainBackground: {
    minHeight: '50vh',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    position: 'relative',
    '& img': {
      opacity: '0.1',
      width: '600px',
    },
  },
  text: {
    position: 'absolute',
    top: '30%',
  },
});
