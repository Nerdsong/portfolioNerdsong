import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Lottie from 'react-lottie'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
