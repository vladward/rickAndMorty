import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  titleWithDescription: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Poppins, sans-serif !important',
    padding: '0 10px',
  },
  title: {},
  description: {
    // '-webkit-text-stroke': '1px #282828',
    // textShadow: '2px 4px 4px #282828',
  },
});
