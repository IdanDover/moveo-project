import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getTheme } from "../redux/userSlice";

function useTheme() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const handleSwitchTheme = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  return { theme, handleSwitchTheme };
}

export default useTheme;
