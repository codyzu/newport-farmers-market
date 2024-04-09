// eslint-disable-line unicorn/filename-case
import {lazy} from 'react';
import {createRootRoute, Outlet} from '@tanstack/react-router';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import '../index.css';

const TanStackRouterDevtools =
  import.meta.env.MODE === 'production'
    ? () => null // Render nothing in production
    : lazy(async () =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((module) => ({
          default: module.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr /> */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
