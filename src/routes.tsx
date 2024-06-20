import {createBrowserRouter} from 'react-router-dom';
import FormPublishPage from 'src/pages/form-settings/form-publish.tsx';
import FormSettingsPage from 'src/pages/form-settings/form-settings.tsx';
import FormSharePage from 'src/pages/form-settings/form-share.tsx';
import FormSetupPage from 'src/pages/form-setup.tsx';
import UserPage from 'src/pages/user.tsx';
import App from './App.tsx';
import PrivateLayout from './component/shared/layout/private-layout.tsx';
import PublicLayout from './component/shared/layout/public-layout.tsx';
import AnalyticsPage from './pages/analytics.tsx';
import BuilderPage from './pages/builder.tsx';
import FormRendererPage from './pages/form-render.tsx';
import HelpPage from './pages/help.tsx';
import LoginPage from './pages/login.tsx';
import MyFormsPage from './pages/my-forms.tsx';
import SettingsPage from './pages/settings.tsx';

export enum RoutesEnum {
  Root = '/',
  Home = '',
  Login = 'login',
  Analytics = 'analytics',
  Help = 'help',
  Settings = 'settings',
  User = 'user',
  FormSetup = 'form-setup',
  Builder = 'form-builder/:id',
  FormRenderer = 'form-renderer',
  FormSettings = 'form-builder/:id/settings',
  FormShare = 'share',
}

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: RoutesEnum.Root,
        element: <PrivateLayout />,
        children: [
          {
            path: RoutesEnum.Home,
            index: true,
            element: <MyFormsPage />,
          },
          {
            path: RoutesEnum.Analytics,
            element: <AnalyticsPage />,
          },
          {
            path: RoutesEnum.Help,
            element: <HelpPage />,
          },
          {
            path: RoutesEnum.Settings,
            element: <SettingsPage />,
          },
          {
            path: RoutesEnum.User,
            element: <UserPage />,
          },
          {
            path: RoutesEnum.FormSetup,
            element: <FormSetupPage />,
          },
          {
            path: RoutesEnum.Builder,
            element: <BuilderPage />,
          },
          {
            path: RoutesEnum.FormSettings,
            element: <FormSettingsPage />,
            children: [
              {
                index: true,
                element: <FormPublishPage />,
              },
              {
                path: RoutesEnum.FormShare,
                element: <FormSharePage />,
              },
            ],
          },
        ],
      },
      {
        element: <PublicLayout />,
        children: [
          {
            index: true,
            path: RoutesEnum.Login,
            element: <LoginPage />,
          },
          {
            path: RoutesEnum.FormRenderer,
            element: <FormRendererPage />,
          },
        ],
      },
    ],
  },
]);
