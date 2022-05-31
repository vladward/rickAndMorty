import { Box } from '@mui/material';
import React, { FC } from 'react';

import { PreloaderSizes } from '../../constants/constants';
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
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={PreloaderSizes[size || 'm']}
        height={PreloaderSizes[size || 'm']}
        viewBox='0 0 38 38'
        stroke={color || '#1fa7ff'}
      >
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(1 1)' strokeWidth='2'>
            <circle strokeOpacity='.5' cx='18' cy='18' r='18' />
            <path d='M36 18c0-9.94-8.06-18-18-18'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 18 18'
                to='360 18 18'
                dur='0.8s'
                repeatCount='indefinite'
              />
            </path>
          </g>
        </g>
      </svg>
    </Box>
  );
};
