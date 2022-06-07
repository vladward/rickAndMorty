import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  characterContentHeader: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterContentHeaderImage: {
    borderRadius: '50px',
  },
  characterContentHeaderDescription: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '100px',
  },
});
