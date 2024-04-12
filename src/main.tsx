// eslint-disable-line unicorn/filename-case
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createRouter} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen';
import './i18n'; // eslint-disable-line import/no-unassigned-import

// Create a new router instance
const router = createRouter({routeTree});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  type Register = {
    router: typeof router;
  };
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
