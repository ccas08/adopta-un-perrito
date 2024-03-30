import React, { useState } from 'react';
import { Formulario } from './Formulario';
import { Alert } from './Alert';
import { SocialButton } from './SocialButton';

export function Registro() {
  const [alerta, setAlerta] = useState({ message: '', type: '' });

  const onAlert = (message, type) => {
    setAlerta({ message, type: `alert-${type}` });
    // Limpia la alerta después de 5 segundos
    setTimeout(() => {
      setAlerta({ message: '', type: '' });
    }, 5000);
  };

  const handleRegister = (formData) => {
    // Suponiendo que formData es un objeto con nombre, email, password y confirmPassword
    // Limpiamos la alerta previa
    setAlerta({ message: '', type: '' });

    // Validamos los campos del formulario
    if (!formData.nombre || !formData.email || !formData.password || !formData.confirmPassword) {
      onAlert('Por favor, completa todos los campos', 'danger');
    } else if (!validateEmail(formData.email)) {
      onAlert('Por favor, ingresa un correo electrónico válido', 'danger');
    } else if (formData.password !== formData.confirmPassword) {
      onAlert('Las contraseñas no coinciden', 'danger');
    } else {
      // Aquí iría la lógica de registro, como una petición a una API
      // Simulamos un registro exitoso
      onAlert('Registro exitoso', 'success');
    }
  };

  // Asegúrate de que validateEmail esté correctamente definida
  const validateEmail = (email) => {
    return email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  return (
    <div>
      <SocialButton network="facebook" />
      <SocialButton network="twitter" />
      <SocialButton network="linkedin" />
      {/* Mostramos la alerta si hay un mensaje que mostrar */}
      {alerta.message && <Alert message={alerta.message} type={alerta.type} />}
      {/* Pasamos onAlert y handleRegister al componente Formulario */}
      <Formulario onAlert={onAlert} onRegister={handleRegister} />
    </div>
  );
}

