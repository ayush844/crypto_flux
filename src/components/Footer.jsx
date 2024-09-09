import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={Logo} alt="crypto flux logo" className=" w-16" />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link
                to='/'
                className=" font-semibold transition-colors hover:text-yellow-500 focus:text-yellow-500"
                aria-label="About Us"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/comparison'
                className="font-semibold transition-colors hover:text-yellow-500 focus:text-yellow-500"
                aria-label="License"
              >
                Comparison
              </Link>
            </li>
            <li>
              <Link
                to='/explore'
                className="font-semibold transition-colors hover:text-yellow-500 focus:text-yellow-500"
                aria-label="Contribute"
              >
                Explore
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Link
        to='/'
        className="text-center font-normal"
        aria-label="Crypto Flux Homepage"
      >
        &copy; 2024 Crypto Flux
      </Link>
    </footer>
  );
}
