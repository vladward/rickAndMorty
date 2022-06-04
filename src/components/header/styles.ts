import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  header: {
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkButton: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 15px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
    fontSize: '22px',
    borderRadius: '5px',
    textAlign: 'center',
    '&:hover': {
      boxShadow: '0px 10px 0px rgba(0, 50, 100, 0.2)',
    },
  },
});
