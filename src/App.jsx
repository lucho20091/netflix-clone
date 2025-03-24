import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Browse from "./pages/Browse"
import useAuthListener from "./hooks/useAuthListener"
import IsUserLoggedIn from './helpers/IsUserLoggedIn'
function App() {
  const { user } = useAuthListener()
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route element={<IsUserLoggedIn user={user}/>}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
