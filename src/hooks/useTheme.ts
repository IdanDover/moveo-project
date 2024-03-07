import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getTheme } from "../redux/userSlice";
import { useEffect } from "react";

function useTheme() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const handleSwitchTheme = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "light") {
      return;
    }
    document.documentElement.classList.add("dark");
  }, []);

  return { theme, handleSwitchTheme };
}

export default useTheme;
