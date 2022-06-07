import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center!important',
    alignItems: 'center',
    minHeight: '350px',
    padding: '20px',
    marginBottom: '40px',
  },
  charactersNoResults: {
    width: '60px',
    color: 'white',
  },
  myMasonryGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0 0 -30px',
    width: 'auto',
  },
  myMasonryGridColumn: {
    paddingLeft: '30px',
    backgroundClip: 'padding-box',
    maxWidth: '330px',
    minWidth: '300px',

    '& > div': {
      background: 'grey',
      marginBottom: '30px',
    },
  },
});
