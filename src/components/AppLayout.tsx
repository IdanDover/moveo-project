import { Outlet } from "react-router-dom";
import Header from "./Header";
import FullPageLoader from "./FullPageLoader";
import useIsLoading from "../hooks/useIsLoading";

function AppLayout() {
  const isLoading = useIsLoading();

  return (
    <div className="grid w-screen h-screen grid-rows-[auto_1fr] mx-auto max-w-full bg-gray-100 dark:bg-gray-800 ">
      {isLoading && <FullPageLoader />}
      <Header />
      <main className="max-w-sm mx-auto overflow-scroll md:max-w-4xl lg:max-w-6xl">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
