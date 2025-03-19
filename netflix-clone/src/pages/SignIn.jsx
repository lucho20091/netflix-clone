import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from "../constants/routes"

const SignIn = () => {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)
  console.log(firebase)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isInvalid = password === "" || email === ""

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    
    try {
      const auth = firebase.auth()
      await auth.signInWithEmailAndPassword(email, password)
      setEmail("")
      setPassword("")
      setError("")
      navigate(ROUTES.BROWSE)
    } catch (err) {
      setError('Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full bg-[url('/images/misc/home-bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <header className="px-12 py-5">
          <Link to="/">
            <img
              src="/images/misc/logo.svg"
              alt="Netflix"
              className="h-12"
            />
          </Link>
        </header>

        <div className="flex items-center justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign In
            </h2>
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="bg-[#e87c03] text-white text-sm rounded p-4 mb-4">
                  {error}
                </div>
              )}
              <div className="space-y-8">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="block w-full px-6 pt-6 pb-1 text-white bg-neutral-700 rounded appearance-none focus:outline-none focus:ring-0 peer"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="block w-full px-6 pt-6 pb-1 text-white bg-neutral-700 rounded appearance-none focus:outline-none focus:ring-0 peer"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || isInvalid}
                className="w-full bg-red-600 py-3 text-white rounded-md mt-10 hover:bg-red-700 transition disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Sign In'}
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
                <Link to="/help" className="text-gray-400 text-sm hover:underline">
                  Need help?
                </Link>
              </div>
            </form>

            <p className="text-gray-400 mt-12">
              New to Netflix?{' '}
              <Link to="/signup" className="text-white hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignIn; 