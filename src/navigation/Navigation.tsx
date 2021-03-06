import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Background, Footer, Header } from '../components';
import { PATHS } from '../constants/constants';
import { routes } from '../constants/routes';
import { navigationStyles } from './styles';

const RouteWrapper: FC<RouteWrapperType> = ({ children }) => {
  const classes = navigationStyles();
  return (
    <Box className={classes.wrapper}>
      <Header />
      <Background />
      <Container
        sx={{ '&.MuiContainer-root': { maxWidth: 'none' } }}
        disableGutters
        className={classes.container}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export const Navigation: FC = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const { path, component: Component } = route;
        return (
          <Route
            key={path}
            path={path}
            element={
              <RouteWrapper>
                <Component />
              </RouteWrapper>
            }
          />
        );
      })}
      <Route path='*' element={<Navigate replace to={PATHS.home} />} />
    </Routes>
  );
};

type RouteWrapperType = {
  children: JSX.Element;
};
