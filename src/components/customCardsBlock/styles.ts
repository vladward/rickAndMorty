import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center!important',
    alignItems: 'center',
    minHeight: '350px',
    padding: '20px',
  },
  charactersNoResults: {
    width: '160px',
    color: 'white',
  },
  myMasonryGrid: {
    display: 'flex',
    margin: '30px 0 0 -30px',
    width: 'auto',
  },
  myMasonryGridColumn: {
    paddingLeft: '30px',
    backgroundClip: 'padding-box',

    '& > div': {
      background: 'grey',
      marginBottom: '30px',
    },
  },
});
