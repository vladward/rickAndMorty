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
    userSelect: 'none',
    '-webkit-text-stroke': '3px #388028',
    // '-webkit-text-d': '3px black',
    '-webkit-text-fill-color': '#3acbd6',
  },
});
