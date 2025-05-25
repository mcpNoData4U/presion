import { useState, useEffect } from 'react';

/**
 * Hook personalizado para persistir el estado en localStorage.
 * @param {string} key La clave bajo la cual se almacenará el valor en localStorage.
 * @param {any} initialValue El valor inicial si no hay nada en localStorage.
 * @returns {[any, Function]} Un array con el valor almacenado y una función para actualizarlo.
 */
export function useLocalStorage(key, initialValue) {
  // Estado para almacenar nuestro valor
  // Pasa una función al useState para que la lógica de inicialización solo se ejecute una vez
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Parsear JSON si el item existe, de lo contrario, usar el valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay un error (ej. JSON inválido), devolver el valor inicial
      console.error(`Error al leer de localStorage para la clave "${key}":`, error);
      return initialValue;
    }
  });

  // useEffect para actualizar localStorage cuando el valor cambie
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error al escribir en localStorage para la clave "${key}":`, error);
    }
  }, [key, storedValue]); // Solo se ejecuta si la clave o el valor cambian

  return [storedValue, setStoredValue];
}