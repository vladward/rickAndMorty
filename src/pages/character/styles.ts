import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  characterWrapper: {
    width: '100%',
    margin: '40px auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    margin: '20px',
    minHeight: '50vh',
    borderRadius: '8px',
  },
  characterCard: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '20px',
    borderRadius: '20px !important',
  },
  characterContentInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  characterCardInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 20px 0 20px',
    borderRadius: '20px !important',
  },
});
