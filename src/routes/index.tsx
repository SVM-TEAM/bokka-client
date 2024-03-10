import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginForm from 'src/components/molecules/forms/auth/LoginForm';
import SignUpForm from 'src/components/molecules/forms/auth/SignUpForm';
import MainLayout from 'src/components/organisms/layouts/MainLayout';
import EmailAuthentication from 'src/pages/auth/EmailAuthentication';
import AuthMain from 'src/pages/auth/Main';

const RouterConfig = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'email-authentication/:verifyCode',
          element: <EmailAuthentication />,
        },
        {
          path: 'auth',
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
