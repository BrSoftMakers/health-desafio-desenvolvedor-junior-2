import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error('404 - Página não encontrada');
    setTimeout(() => {
      navigate(-1); 
    }, 1000); 
  }, [navigate]);

  return null; 
}


