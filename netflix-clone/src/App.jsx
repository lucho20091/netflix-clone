import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        {/* <Route path={ROUTES.SIGN_UP} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
