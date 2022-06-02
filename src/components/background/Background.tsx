import { Box, Typography } from '@mui/material';

import { heroBackground } from '../../assets';
import { useStyles } from './styles';

export const Background = () => {
  const styles = useStyles();
  return (
    <Box className={styles.mainBackground}>
      <img src={heroBackground} alt='' />
      <Typography
        variant='body1'
        fontSize={150}
        fontWeight={'bold'}
        className={styles.text}
      >
        The Rick and Morty
      </Typography>
    </Box>
  );
};
