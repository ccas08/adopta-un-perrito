import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registro } from './components/Registro'; // Asegúrate de que la ruta sea correcta

function App() {
  // Estado para controlar los mensajes de alerta
  const [alert, setAlert] = useState({ message: '', type: 'd-none' }); // Utiliza 'd-none' de Bootstrap para ocultar inicialmente

  // Función para actualizar el mensaje de alerta
  const updateAlert = (message, type) => {
    setAlert({ message, type: `alert-${type}` });
    console.log('Alerta actualizada:', message, type);
  };
  
  const clearAlert = () => {
    setAlert({ message: '', type: 'd-none' });
    console.log('Alerta borrada');
  };

  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ width: '100vw', backgroundColor: '#d1e7dd' }}>
      <div className="card shadow" style={{ width: '22rem', padding: '2rem' }}>
        {/* Si hay un mensaje, mostrará la alerta */}
        <div className={`alert ${alert.type} mt-3 mb-3 ${alert.message ? 'd-block' : 'd-none'}`}>
          {alert.message}
        </div>

        {/* Pasamos las funciones de actualización y limpieza de la alerta como props */}
        <Registro onAlert={updateAlert} clearAlert={clearAlert} />
      </div>
    </div>
  );
}

export default App;




