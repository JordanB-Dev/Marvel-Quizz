import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/style.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
