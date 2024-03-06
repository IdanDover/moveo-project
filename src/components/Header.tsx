import { useSelector } from "react-redux";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import Button from "./Button";
import { getUsername } from "../redux/userSlice";
import useTheme from "../hooks/useTheme";

function Header() {
  const userName = useSelector(getUsername);
  const { theme, handleSwitchTheme } = useTheme();

  return (
    <header>
      <div className="flex items-center justify-between px-3 py-3 space-x-4 font-semibold bg-blue-500 md:justify-end dark:bg-blue-600 ">
        <Button onClick={handleSwitchTheme} variation={"round"}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        <p className=" text-stone-800 dark:text-stone-300">hello, {userName}</p>

        <Button variation={"primary"}>
          <span>change name</span>
        </Button>

        {/* {user ? (
          <>
            <Button
              disabled={false}
              onClick={logoutUser}
              type={"secondary_round"}
            >
              <p className="text-xs text-stone-700">צא</p>
            </Button>
            <LinkButton
              to="/user"
              className="text-xs text-stone-700 dark:text-stone-200"
            >{`הי ${user.firstName}`}</LinkButton>
          </>
        ) : (
          <Button
            to={"login"}
            disabled={false}
            type={location.pathname.includes("login") ? "primary" : "secondary"}
          >
            <p className="text-xs text-stone-700">מפה נכנסים</p>
          </Button>
        )}

        <Button
          to={"tasks"}
          disabled={false}
          type={`${
            location.pathname.includes("tasks") ? "primary" : "secondary"
          }`}
        >
          <p className="text-xs text-stone-700">משימות</p>
        </Button>
        <Button
          to={"home"}
          disabled={false}
          type={location.pathname.includes("home") ? "primary" : "secondary"}
        >
          <p className="text-xs text-stone-700">כיתות</p>
        </Button> */}
      </div>
    </header>
  );
}

export default Header;
