import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginForm from 'src/components/molecules/forms/auth/LoginForm';
import SignUpForm from 'src/components/molecules/forms/auth/SignUpForm';
import MainLayout from 'src/components/organisms/layouts/MainLayout';
import NoHeaderLayout from 'src/components/organisms/layouts/NoHeaderLayout';
import HomeMain from 'src/pages/Main';
import EmailAuthentication from 'src/pages/auth/EmailAuthentication';
import AuthMain from 'src/pages/auth/Main';

const RouterConfig = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: 'home',
          element: <HomeMain />,
        },
        {
          path: 'email-authentication/:verifyCode',
          element: <EmailAuthentication />,
        },
      ],
    },
    {
      path: '/auth',
      element: <NoHeaderLayout />,
      children: [
        {
          element: <AuthMain />,
          children: [
            {
              path: 'login',
              element: <LoginForm />,
            },
            {
              path: 'sign-up',
              element: <SignUpForm />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterConfig;
