import React from 'react';
import { Link } from 'react-router-dom';
import OptForm from './OptForm';
import Feature from './Feature';
import * as ROUTES from '../constants/routes';
const Navbar = ({ optformIncluded = false, featureIncluded = false}) => {
  return (
    <nav className="w-full p-4 bg-cover bg-center bg-no-repeat bg-[url('/images/misc/home-bg.jpg')]">
        <div className="flex items-center justify-between">            
            <Link to="/" className="flex items-center">
                <div className="h-8 lg:h-32 md:h-16 flex items-center">
                <img
                    src="/images/misc/logo.svg"
                    alt="Netflix"
                    className="w-16 lg:w-32 h-auto cursor-pointer object-contain"
                />
                </div>
            </Link>
            <div className="flex items-center">
                <Link to={ROUTES.SIGN_IN} className="flex items-center">
                <button className="bg-red-600 px-4 py-1 text-white rounded-md hover:bg-red-700 transition">
                    Sign In
                </button>
                </Link>
            </div>
        </div>
        {featureIncluded && <Feature />}
        {optformIncluded && <OptForm />}
    </nav>
  );
};

export default Navbar;
