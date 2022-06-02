import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  home: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    padding: '30px 0',
    fontFamily: 'RickAndMorty!important',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '350px',
  },
});
