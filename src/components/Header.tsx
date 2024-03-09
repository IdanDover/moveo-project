import { useSelector } from 'react-redux';
import { FaSun } from 'react-icons/fa6';
import { FaMoon } from 'react-icons/fa6';
import Button from './Button';
import { getUsername } from '../redux/userSlice';
import useTheme from '../hooks/useTheme';
import Logo from './Logo';

function Header() {
  const userName = useSelector(getUsername);
  const { theme, handleSwitchTheme } = useTheme();

  return (
    <header>
      <div className="flex items-center justify-between px-3 py-3 bg-blue-500 dark:bg-blue-600">
        <Logo />
        <div className="flex items-center justify-around px-3 py-3 space-x-4 font-semibold sm:justify-end">
          <Button onClick={handleSwitchTheme} variation={'round'}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </Button>

          <p className=" text-stone-800 dark:text-stone-300">
            hello, {userName}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
