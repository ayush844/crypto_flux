import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="w-full bg-stone-900 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-stone-900 text-center md:justify-between">
        <img src={Logo} alt="crypto flux logo" className=" w-16" />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <NavLink
                to='/'
                className={({isActive}) => `font-semibold transition-colors text-black dark:text-white hover:text-yellow-500  ${isActive ? "dark:text-customYellow text-customYellow" : ""}`}
                aria-label="home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/comparison'
                className={({isActive}) => `font-semibold transition-colors text-black dark:text-white hover:text-yellow-500  ${isActive ? "dark:text-customYellow text-customYellow" : ""}`}
                aria-label="comparison"
              >
                Comparison
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/explore'
                className={({isActive}) => `font-semibold transition-colors text-black dark:text-white hover:text-yellow-500  ${isActive ? "dark:text-customYellow text-customYellow" : ""}`}
                aria-label="Explore"
              >
                Explore
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Link
        to='/'
        className="text-center font-normal text-white"
        aria-label="Crypto Flux Homepage"
      >
        &copy; 2024 Crypto Flux
      </Link>
    </footer>
  );
}
