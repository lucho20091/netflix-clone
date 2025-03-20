import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from "../constants/routes"

const SignUp = () => {
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const validateForm = () => {
    const newErrors = {};
    
    if (!firstName){
      newErrors.firstName = 'Name is required.'
    }
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 4) {
      newErrors.password = 'Your password must contain between 4 and 60 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      // await new Promise(resolve => setTimeout(resolve, 1000));
      const auth = firebase.auth()
      const request = await auth.createUserWithEmailAndPassword(email, password)
      await request.user.updateProfile({
        displayName: firstName,
        photoURL: `/images/users/${Math.ceil(Math.random() * 5)}.png`
      })
      setFirstName("")
      setEmail("")
      setPassword("")
      navigate(ROUTES.BROWSE)
      // Handle successful signup
    } catch (err) {
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[url('/images/misc/home-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {/* Background Overlay */}
      <div className="bg-black w-full min-h-screen bg-opacity-50">
        {/* Header */}
        <header className="px-12 py-5">
          <Link to="/">
            <img
              src="/images/misc/logo.svg"
              alt="Netflix"
              className="h-12"
            />
          </Link>
        </header>

        {/* Sign Up Form */}
        <div className="flex items-center justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full mx-4">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              {errors.form && (
                <div className="bg-[#e87c03] text-white text-sm rounded p-4 mb-4">
                  {errors.form}
                </div>
              )}
              <div className="space-y-8">
                <div>
                <input
                    type="text"
                    placeholder="Full Name"
                    className={`block w-full px-6 pt-6 pb-1 text-white bg-neutral-700 rounded appearance-none focus:outline-none focus:ring-0 peer ${
                      errors.firstName ? 'border-b-2 border-[#e87c03]' : ''
                    }`}
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.email) {
                        setErrors({ ...errors, firstName: '' });
                      }
                    }}
                  />
                  {errors.firstName && (
                    <p className="text-[#e87c03] text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`block w-full px-6 pt-6 pb-1 text-white bg-neutral-700 rounded appearance-none focus:outline-none focus:ring-0 peer ${
                      errors.email ? 'border-b-2 border-[#e87c03]' : ''
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) {
                        setErrors({ ...errors, email: '' });
                      }
                    }}
                  />
                  {errors.email && (
                    <p className="text-[#e87c03] text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className={`block w-full px-6 pt-6 pb-1 text-white bg-neutral-700 rounded appearance-none focus:outline-none focus:ring-0 peer ${
                      errors.password ? 'border-b-2 border-[#e87c03]' : ''
                    }`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) {
                        setErrors({ ...errors, password: '' });
                      }
                    }}
                  />
                  {errors.password && (
                    <p className="text-[#e87c03] text-sm mt-1">{errors.password}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 py-3 text-white rounded-md mt-10 hover:bg-red-700 transition disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Sign Up'}
              </button>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2"
                  />
                  <label htmlFor="remember" className="text-gray-400 text-sm">
                    Remember me
                  </label>
                </div>
              </div>
            </form>

            <p className="text-gray-400 mt-12">
              Already have an account?{' '}
              <Link to="/login" className="text-white hover:underline">
                Sign in now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

/*
<div = main container with background image>
   <div = background overlay with black opacity>
      <header = navigation header with logo>
         <Link = home page link>
            <img = netflix logo>
         </Link>
      </header>

      <div = form container with flex centering>
         <div = form box with black background>
            <h2 = sign up title>
               Sign Up
            </h2>

            <form = sign up form with validation>
               <div = error message container>
                  {errors.form}
               </div>

               <div = input fields container>
                  <div = email input group>
                     <input = email input with validation>
                     <p = email error message>
                        {errors.email}
                     </p>
                  </div>

                  <div = password input group>
                     <input = password input with validation>
                     <p = password error message>
                        {errors.password}
                     </p>
                  </div>
               </div>

               <button = submit button with loading state>
                  {isLoading ? 'Loading...' : 'Sign Up'}
               </button>

               <div = remember me section>
                  <div = checkbox container>
                     <input = remember me checkbox>
                     <label = remember me label>
                        Remember me
                     </label>
                  </div>
               </div>
            </form>

            <p = sign in link container>
               Already have an account?{' '}
               <Link = sign in page link>
                  Sign in now
               </Link>
            </p>
         </div>
      </div>
   </div>
</div>
*/
