import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  preloaderAbsolute: {
    display: 'flex',
    height: '100vh',
    position: 'absolute',
    justifySelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '111',
    top: '0',
    left: '0',
    right: '0',
  },
  preloader: {
    textAlign: 'center',
    margin: 'auto',
    '& svg': {
      cursor: 'default',
    },
  },
});
