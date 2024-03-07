import { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { loader as codeBlockLoader } from "../features/codeBlock/CodeBlockList";

import AppLayout from "../components/AppLayout";
import Page404 from "../pages/Page404";
import NotFound from "../components/NotFound";
import FullPageLoader from "../components/FullPageLoader";
const Lobby = lazy(() => import("../pages/Lobby"));
const CodeBlock = lazy(() => import("../pages/CodeBlock"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="lobby" />,
      },
      {
        path: "/lobby",
        element: <Lobby />,
        loader: codeBlockLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/code-block/:room",
        element: <CodeBlock />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

function AppRouter() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default AppRouter;
