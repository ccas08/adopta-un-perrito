import React, { useState } from 'react';

export function Formulario({ onRegister, onAlert }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    return email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      nombre: nombre.trim(),
      email: email.trim(),
      password: password,
      confirmPassword: confirmPassword
    };

    // Ahora puedes llamar a onRegister directamente, ya que ha sido desestructurado de props
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo para el nombre */}
      <input 
        type="text" 
        placeholder="Nombre" 
        className="form-control my-2" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
      />
      {/* Campo para el email */}
      <input 
        type="email" 
        placeholder="Email" 
        className="form-control my-2" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      {/* Campo para la contraseña */}
      <input 
        type="password" 
        placeholder="Contraseña" 
        className="form-control my-2" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {/* Campo para confirmar la contraseña */}
      <input 
        type="password" 
        placeholder="Confirma tu contraseña" 
        className="form-control my-2" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
      />
      {/* Botón de registro */}
      <button 
        type="submit" 
        className="btn btn-success w-100 my-2"
      >
        Registrarse
      </button>
    </form>
  );
}
