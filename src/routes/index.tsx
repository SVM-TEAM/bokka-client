import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LearnContent from 'src/components/molecules/contents/main/LearnContent';
import NewsContent from 'src/components/molecules/contents/main/NewsContent';
import RankContent from 'src/components/molecules/contents/main/RankContent';
import ShortsContent from 'src/components/molecules/contents/main/ShortsContent';
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
          children: [
            {
              path: 'news',
              element: <NewsContent />,
            },
            {
              path: 'rank',
              element: <RankContent />,
            },
            {
              path: 'learn',
              element: <LearnContent />,
            },
            {
              path: 'shorts',
              element: <ShortsContent />,
            },
          ],
        },
        {
          path: 'email-authentication/:verifyCode',
          element: <EmailAuthentication />,
        },
      ],
    },
    {
      path: 'auth',
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
