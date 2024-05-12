'use client'

import React, { useEffect, useState } from 'react';

// Hook personalizado para el progreso del scroll
const UseScrollProgress = () => {
  // Estado para almacenar el progreso del scroll
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    // Función para actualizar el progreso del scroll
    const updateScrollCompletion = () => {
      // Calcular el progreso actual del scroll
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      // Calcular el porcentaje de progreso
      if (scrollHeight) {
        setCompletion(+((currentProgress / scrollHeight) * 100).toFixed(2));
      }
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', updateScrollCompletion);

    // Limpiar el evento cuando el componente se desmonta
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []); // El segundo parámetro del useEffect está vacío para que se ejecute solo una vez

  // Devolver el progreso del scroll
  return completion;
};

export {UseScrollProgress};
