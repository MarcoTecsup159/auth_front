import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/', formData);
      localStorage.setItem('access', response.data.access);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div 
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{ background: 'linear-gradient(135deg, #121212, #1e1e1e)', transition: 'background 0.3s ease' }}
    >
      <div 
        className="card shadow-lg"
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#2c2c2c',
          border: '1px solid #4a4a4a',
          borderRadius: '12px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          boxShadow: isHovered ? '0 10px 20px rgba(0,255,100,0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-body p-5">
          <h3 className="text-center mb-4 text-white">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn w-100 text-white" 
              style={{ 
                backgroundColor: '#00b300', 
                borderColor: '#00ff00',
                transition: 'background-color 0.3s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#00ff00';
                e.target.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#00b300';
                e.target.style.color = 'white';
              }}
            >
              Login
            </button>
          </form>
          <div className="mt-3 text-center">
            <small className="text-light">
              Don't have an account? <Link to="/register" className="text-success">Sign up</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
