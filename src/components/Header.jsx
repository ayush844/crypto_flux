import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className=" border-gray-200 bg-stone-900  shadow-md shadow-yellow-400">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className=" h-8 md:h-20" alt="cryptoflux Logo" />
                    <span className="self-center text-xl md:text-3xl font-semibold whitespace-nowrap text-white">
                        Crypto<span className=' text-customYellow'>Flux</span>
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to='/explore'>
                        <button type="button" className="text-black focus:outline-none font-semibold md:text-lg rounded-lg text-sm px-2 py-1 md:px-4 md:py-2 text-center bg-customYellow hover:bg-yellow-400">
                            Explore
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-stone-900 md:bg-stone-900 border-gray-700">
                        <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                ? "block text-lg md:text-xl py-2 px-3 md:p-0 rounded md:bg-transparent text-customYellow "
                                : "block text-lg md:text-xl py-2 px-3 md:p-0 rounded md:bg-transparent  text-white md:hover:text-customYellow"
                            }
                            aria-current="page"
                            >
                                Home
                            </NavLink>

                        </li>
                        <li>
                        <NavLink
                        to="/comparison"
                        className={({ isActive }) =>
                            isActive
                            ? "block text-lg md:text-xl py-2 px-3 md:p-0 rounded md:bg-transparent text-customYellow"
                            : "block text-lg md:text-xl py-2 px-3 md:p-0 rounded md:bg-transparent text-white md:hover:text-customYellow"
                        }
                        aria-current="page"
                        >
                            Comparison
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
