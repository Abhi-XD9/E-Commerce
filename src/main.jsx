import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mycontext, { Store } from './Components/Mycontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Mycontext>
   <App />
   </Mycontext>
    
  </StrictMode>,
)
