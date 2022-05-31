import { Box, Container } from '@mui/material';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Background, Footer, Header } from '../components';
import { routes } from '../constants/routes';
import { useStyles } from './styles';

const RouteWrapper: FC<RouteWrapperType> = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Header />
      <Background />
      <Container disableGutters className={classes.container}>
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
    </Routes>
  );
};

type RouteWrapperType = {
  children: JSX.Element;
};
