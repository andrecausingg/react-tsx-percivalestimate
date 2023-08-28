// Layout
import GuestLayout from './layout/guest/GuestLayout';

// Guest
import Home from './views/guest/Home';

// Independent Component
import NotFound from './z-global/NotFound';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routerConfig: Record<string, RouteConfig[]> = {
  guest: [
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: '', // Empty path, as it should match the parent's path
          element: <Home />,
        }
      ],
    },
    {
      path: '*', // Wildcard for unmatched routes
      element: <NotFound />,
    }
  ]
};

export default routerConfig;
