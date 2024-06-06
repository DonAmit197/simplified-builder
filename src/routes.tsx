import {createBrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import PrivateLayout from './component/shared/layout/private-layout.tsx';
import PublicLayout from './component/shared/layout/public-layout.tsx';
import AnalyticsPage from './pages/analytics.tsx';
import BuilderPage from './pages/builder.tsx';
import HelpPage from './pages/help.tsx';
import HomePage from './pages/home.tsx';
import LoginPage from './pages/login.tsx';
import MyFormsPage from './pages/my-forms.tsx';

export enum RoutesEnum {
  Root = '/',
  Home = '',
  Login = 'login',
  Analytics = 'analytics',
  Help = 'help',
  MyForms = 'my-forms',
  Builder = 'form-builder'
}

export const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: RoutesEnum.Root,
        element: <PrivateLayout/>,
        children: [
          {
            path: RoutesEnum.Home,
            index: true,
            element: <HomePage/>
          },
          {
            path: RoutesEnum.Analytics,
            element: <AnalyticsPage/>
          },
          {
            path: RoutesEnum.Help,
            element: <HelpPage/>
          },
          {
            path: RoutesEnum.MyForms,
            element: <MyFormsPage/>
          },
          {
            path: RoutesEnum.Builder,
            element: <BuilderPage/>
          }
        ]
      },
      {
        path: RoutesEnum.Login,
        element: <PublicLayout/>,
        children: [
          {
            index: true,
            element: <LoginPage/>
          }
        ]
      }
    ]
  }]
);
