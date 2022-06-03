import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  wrapper: {},
  container: {
    minHeight: '60vh',

    overflow: 'hidden',
    background: 'rgb(36, 40, 47)',
    margin: '0 auto',
    paddingBottom: '40px',
    '& .MuiContainer': {
      maxWidth: 'auto',
    },
  },
});
