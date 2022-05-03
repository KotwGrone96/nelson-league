import './main.scss';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('root');

createRoot(app).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
