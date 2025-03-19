import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirebaseContext } from "./context/firebase.js"
import { firebase } from "./lib/firebase.js"
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <App />
    </FirebaseContext.Provider>
  </StrictMode>
)
