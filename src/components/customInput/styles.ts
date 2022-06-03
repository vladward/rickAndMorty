import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  customInput: {
    backgroundColor: 'white',
    margin: '5px',
    borderRadius: '5px',
    width: '300px',
    '& input': {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    '& label': {
      textAlign: 'center',
    },
  },
});
