import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid w-screen h-screen grid-rows-[auto_1fr] mx-auto max-w-full bg-gray-100 dark:bg-gray-800 ">
      <Header />
      <main className="max-w-sm mx-auto overflow-scroll md:max-w-4xl lg:max-w-6xl">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
