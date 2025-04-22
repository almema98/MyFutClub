import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* Importar assets (css) */
import './assets/css/normalize.css';
import './assets/css/styles.css';

createRoot(document.getElementById('root')).render(
	<App />
)
