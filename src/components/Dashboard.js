import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    // Redirige a la URL especificada
    window.location.href = 'https://sujennancco.wixsite.com/my-site-2';
  }, []);

  return null; // No renderiza nada ya que redirige automáticamente
};

export default Dashboard;

