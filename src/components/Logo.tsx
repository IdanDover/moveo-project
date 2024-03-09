import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Logo() {
  return (
    <Link
      to="/lobby"
      className="block h-[10vh] w-[15vw] sm:h-[10vh] sm:w-[10vw]"
    >
      <img
        src={logo}
        alt="logo"
        className="object-contain w-full h-full invert-0 dark:invert"
      />
    </Link>
  );
}

export default Logo;
