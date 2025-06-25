import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Crown, Mail, Lock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Verificar si ya está logueado
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verificar si el token es válido
      verifyToken(token);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch('http://localhost:3006/api/users/login', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Token válido, redirigir al dashboard o página principal
        navigate('/p');
      } else {
        // Token inválido, eliminar del localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    } catch (error) {
      console.error('Error verificando token:', error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar errores cuando el usuario comience a escribir
    if (error) setError('');
    if (success) setSuccess('');
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      setError('El email es requerido');
      return false;
    }
    
    if (!formData.password.trim()) {
      setError('La contraseña es requerida');
      return false;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingresa un email válido');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Login exitoso
        setSuccess('¡Login exitoso! Redirigiendo...');
        
        // Guardar token y datos del usuario en localStorage
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify(data.user));
        
        // Limpiar formulario
        setFormData({ email: '', password: '' });
        
        // Redirigir después de un breve delay
        setTimeout(() => {
          navigate('/p'); // o la ruta que prefieras para usuarios logueados
        }, 1500);
        
      } else {
        // Error en login
        setError(data.message || 'Error al iniciar sesión');
      }

    } catch (error) {
      console.error('Error en login:', error);
      setError('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchToRegister = () => {
    navigate('/Register');
  };

  const handleSwitchToRestablecer = () => {
    navigate('/Restablecer');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Elementos decorativos */}
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        
        {/* Header */}
        <div className="login-header">
          <div className="login-icon">
            <Crown className="icon" />
          </div>
          <h1 className="login-title">FRANK FURT</h1>
          <p className="login-subtitle">Bienvenido de vuelta</p>
        </div>

        {/* Mensajes de error y éxito */}
        {error && (
          <div className="message-container error-message">
            <AlertCircle className="message-icon" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="message-container success-message">
            <div className="success-icon">✓</div>
            <span>{success}</span>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className="input-icon">
              <Mail className="icon-small" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              className="login-input"
              required
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <Lock className="icon-small" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
              className="login-input password-input"
              required
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
              disabled={loading}
            >
              {showPassword ? <EyeOff className="icon-small" /> : <Eye className="icon-small" />}
            </button>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" className="custom-checkbox" disabled={loading} />
              <span className="checkbox-text">Recordarme</span>
            </label>
            
            <div className="login-switch">
              <p className="switch-text">
                <button
                  type="button"
                  onClick={handleSwitchToRestablecer}
                  className="switch-link"
                  disabled={loading}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </p>
            </div>
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        {/* Divisor */}
        <div className="login-divider">
          <div className="divider-line"></div>
          <span className="divider-text">o</span>
          <div className="divider-line"></div>
        </div>

        {/* Cambiar a registro */}
        <div className="login-switch">
          <p className="switch-text">
            ¿No tienes cuenta?{' '}
            <button
              type="button"
              onClick={handleSwitchToRegister}
              className="switch-link"
              disabled={loading}
            >
              Registrarse
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;