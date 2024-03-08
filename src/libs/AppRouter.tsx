import { Suspense, lazy } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { loader as lobbyLoader } from '../features/codeExercise/CodeExerciseList';
import { loader as codePageLoader } from '../features/codeExercise/CodeEditor';
import AppLayout from '../components/AppLayout';
import Page404 from '../pages/Page404';
import NotFound from '../components/NotFound';
import FullPageLoader from '../components/FullPageLoader';
const Lobby = lazy(() => import('../pages/Lobby'));
const CodePage = lazy(() => import('../pages/CodePage'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="lobby" />,
      },
      {
        path: '/lobby',
        element: <Lobby />,
        loader: lobbyLoader,
        errorElement: <NotFound />,
      },
      {
        path: '/code-exercise/:room',
        element: <CodePage />,
        loader: codePageLoader,
        errorElement: <NotFound />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);

function AppRouter() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default AppRouter;
