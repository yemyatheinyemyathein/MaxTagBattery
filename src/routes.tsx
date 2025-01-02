// src/routes.ts
import React from 'react';
import { RouteObject } from 'react-router-dom';

// Import your components
import HomePage from './pages/Home'; // Ensure the component is exported as default
import AboutPage from './pages/About'; // Ensure the component is exported as default
import NotFoundPage from './pages/NotFound'; // Ensure the component is exported as default

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />, // A fallback for undefined routes
  },
];
