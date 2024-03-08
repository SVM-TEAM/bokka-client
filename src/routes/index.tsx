import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const RouterConfig = () => {
  const router = createBrowserRouter([]);
  return <RouterProvider router={router} />;
};

export default RouterConfig;
