import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

function UserSettings() {
  const [username, setUsername] = useState('Usuario Demo');
  const [email, setEmail] = useState('usuario.demo@example.com');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // 'es' o 'en'
  const [appTheme, setAppTheme] = useLocalStorage('theme', 'light'); // Obtener el tema actual

  const handleSaveSettings = (e) => {
    e.preventDefault();
    // En una aplicación real, esto enviaría los datos a un backend.
    toast.success('Ajustes guardados!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: appTheme,
    });
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    toast.info(`Idioma cambiado a ${e.target.value === 'es'? 'Español' : 'Inglés'} (requiere recarga para efectos completos)`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: appTheme,
    });
  };

  const handleThemeChange = (e) => {
    setAppTheme(e.target.value);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Ajustes & Personalización</h2>

      <form onSubmit={handleSaveSettings} className="space-y-6">
        {/* Perfil de Usuario */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Perfil de Usuario</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre de Usuario
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Notificaciones */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Notificaciones</h3>
          <div className="flex items-center">
            <input
              id="notifications"
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
            />
            <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Habilitar Notificaciones
            </label>
          </div>
        </motion.div>

        {/* Apariencia y Tema */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Apariencia y Tema</h3>
          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Tema
            </label>
            <select
              id="theme"
              value={appTheme}
              onChange={handleThemeChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            >
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
            </select>
          </div>
        </motion.div>

        {/* Idioma y Región */}
        <motion.div
          className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Idioma y Región</h3>
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Idioma
            </label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Guardar Cambios
        </motion.button>
      </form>
    </div>
  );
}

export default UserSettings;