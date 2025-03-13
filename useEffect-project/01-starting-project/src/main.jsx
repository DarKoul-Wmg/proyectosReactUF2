import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// //Renderiza dos veces, te ayuda a ver si los componentes de una carga (por ejemplo al cargar pagina), se estan ejecutando de forma correcta
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
