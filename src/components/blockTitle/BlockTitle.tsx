import { Typography } from '@mui/material';
import { FC } from 'react';

import { useStyles } from './styles';

export const BlockTitle: FC<{ title: string }> = ({ title }) => {
  const styles = useStyles();
  return (
    <Typography variant='h3' className={styles.title}>
      {title}
    </Typography>
  );
};
