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

/*
<div = main navigation container with fixed positioning>
   <div = flex container for horizontal alignment>
      <div = logo section>
         <Link = home page link>
            <div = logo container>
               <img = netflix logo>
            </div>
         </Link>
      </div>

      <div = right side container>
         <Link = sign in page link>
            <button = sign in button>
               Sign In
            </button>
         </Link>
      </div>

      {feature && <Feature />}
      {optForm && <OptForm />}
   </div>
</div>

Tailwind CSS Classes Used:
w-full = width: 100%
p-4 = padding: 1rem (16px)
bg-cover = background-size: cover
bg-center = background-position: center
bg-no-repeat = background-repeat: no-repeat
bg-[url('/images/misc/home-bg.jpg')] = background-image: url('/images/misc/home-bg.jpg')
flex = display: flex
items-center = align-items: center
justify-between = justify-content: space-between
h-8 = height: 2rem (32px)
lg:h-32 = height: 8rem (128px) on large screens
md:h-16 = height: 4rem (64px) on medium screens
w-16 = width: 4rem (64px)
lg:w-32 = width: 8rem (128px) on large screens
h-auto = height: auto
cursor-pointer = cursor: pointer
object-contain = object-fit: contain
bg-red-600 = background-color: #dc2626
px-4 = padding-left: 1rem (16px), padding-right: 1rem (16px)
py-1 = padding-top: 0.25rem (4px), padding-bottom: 0.25rem (4px)
text-white = color: white
rounded-md = border-radius: 0.375rem (6px)
hover:bg-red-700 = background-color: #b91c1c on hover
transition = transition-property: all, transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), transition-duration: 150ms
*/
