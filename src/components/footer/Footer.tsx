import { Box, Link, Typography } from '@mui/material';

import { EXTERNAL_LINKS } from '../../constants/constants';
import { useStyles } from './styles';

export const Footer = () => {
  const styles = useStyles();
  return (
    <Box className={styles.footer}>
      <Typography variant={'subtitle2'} className={styles.footerText}>
        <span className={styles.footerSignature}>The Rick and Morty</span>created by{' '}
        <Link href={EXTERNAL_LINKS.github}>Vladward</Link> 2022
      </Typography>
    </Box>
  );
};
