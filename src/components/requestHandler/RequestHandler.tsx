import { Typography } from '@mui/material';
import React, { FC } from 'react';

import { Preloader } from '../preloader/Preloader';

export const RequestHandler: FC<RequestHandlerType> = ({
  loading,
  error,
  loaderColor,
  loaderSize,
  fullScreen,
  children,
}) => {
  if (loading)
    return <Preloader color={loaderColor} size={loaderSize} fullScreen={fullScreen} />;
  if (error) return <Typography variant={'h4'}>Hoh, something wrong...</Typography>;
  return <>{children}</>;
};

type RequestHandlerType = {
  loading: boolean;
  error?: string | undefined;
  children: any;
  loaderColor?: string;
  loaderSize?: 's' | 'm' | 'l';
  fullScreen?: boolean;
};
