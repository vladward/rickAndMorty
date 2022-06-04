import { Typography } from '@mui/material';
import { FC } from 'react';

import { useStyles } from './styles';

export const BlockTitle: FC<{
  title: string;
  color?: string;
  fontWeight?: string | number;
  fontSize?: string | number;
}> = ({ title, color, fontWeight, fontSize }) => {
  const styles = useStyles();
  return (
    <Typography
      color={color}
      component='span'
      className={styles.title}
      fontWeight={fontWeight || 400}
      fontSize={fontSize || '3rem'}
      textTransform='capitalize'
      fontFamily='Poppins'
    >
      {title}
    </Typography>
  );
};
