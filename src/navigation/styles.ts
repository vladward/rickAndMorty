import { makeStyles } from '@mui/styles';

export const navigationStyles = makeStyles({
  wrapper: {
    width: '99vw',
  },
  container: {
    // minHeight: '60vh',
    width: '100%',
    maxWidth: '1560px ',
    display: 'flex',
    justifyContent: 'center!important',
    alignItems: 'center!important',
    overflow: 'hidden',
    background: 'rgb(36, 40, 47)',
    margin: '0 auto',
    '& .MuiContainer': {
      maxWidth: 'auto',
    },
  },
});
