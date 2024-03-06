import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import FullPageLoader from '../components/FullPageLoader';

import AppLayout from '../components/AppLayout';
import Lobby from '../pages/Lobby';
import Page404 from '../pages/Page404';
import CodeBlock from '../pages/CodeBlock';

function AppRouter() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Navigate replace to="lobby" />} />
            <Route path="lobby" element={<Lobby />} />
            <Route path="code-block/:room" element={<CodeBlock />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AppRouter;
