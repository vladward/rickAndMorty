import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  footer: {
    backgroundColor: 'white',
    height: '90px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'monospace!important',
    '& a': {
      textDecoration: 'none',
      color: 'gray',
    },
  },
  footerSignature: {
    fontFamily: 'RickAndMorty!important',
    paddingRight: '20px',
  },
});
