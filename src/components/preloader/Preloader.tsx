import { Box } from '@mui/material';
import React, { FC } from 'react';

import { PreloaderIcon } from '../icons';
import { useStyles } from './styles';

export type PreloaderTypeProps = {
  color?: string;
  size?: 's' | 'm' | 'l';
  fullScreen?: boolean;
};

export const Preloader: FC<PreloaderTypeProps> = ({
  color,
  size,
  fullScreen = false,
}) => {
  const styles = useStyles();
  return (
    <Box className={`${fullScreen ? styles.preloaderAbsolute : styles.preloader}`}>
      <PreloaderIcon color={color} size={size} />
    </Box>
  );
};
