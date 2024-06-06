import {createBrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import PrivateLayout from './component/shared/layout/private-layout.tsx';
import PublicLayout from './component/shared/layout/public-layout.tsx';
import BuilderPage from './pages/builder.tsx';
import HomePage from './pages/home.tsx';
import LoginPage from './pages/login.tsx';

export enum RoutesEnum {
  Root = '/',
  Home = '',
  Login = 'login',
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
