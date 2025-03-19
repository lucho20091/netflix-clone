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
NAVBAR COMPONENT STRUCTURE AND STYLES:

1. Main Navigation Container (nav)
   - Width: 100% (full width)
   - Padding: 16px (p-4)
   - Background: Netflix background image
   - Background Properties: cover, center, no-repeat

2. Flex Container (div)
   - Display: flex
   - Alignment: items-center (vertical center)
   - Justify: space-between (horizontal spacing)
   
3. Logo Section
   a. Link Container
      - Display: flex
      - Alignment: items-center
   
   b. Logo Container (div)
      - Height: responsive
        * Mobile: 32px (h-8)
        * Tablet: 64px (md:h-16)
        * Desktop: 128px (lg:h-32)
      - Display: flex
      - Alignment: items-center
   
   c. Logo Image
      - Width: responsive
        * Mobile: 64px (w-16)
        * Desktop: 128px (lg:w-32)
      - Height: auto
      - Cursor: pointer
      - Object-fit: contain

4. Sign In Section
   a. Container (div)
      - Display: flex
      - Alignment: items-center
   
   b. Sign In Link
      - Display: flex
      - Alignment: items-center
   
   c. Sign In Button
      - Background: Netflix red (#e50914)
      - Padding: 16px horizontal, 4px vertical
      - Text: white
      - Border-radius: 4px
      - Hover: darker red
      - Transition: smooth

5. Conditional Components
   - Feature: Shows if featureIncluded is true
   - OptForm: Shows if optformIncluded is true
*/
