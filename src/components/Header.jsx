import React from 'react';
import { FiSun, FiMoon, FiBell, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

function Header({ toggleTheme, currentTheme }) {
  const handleNotificationClick = () => {
    toast.info('No tienes notificaciones nuevas por ahora.', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: currentTheme,
    });
  };

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between z-10">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Bienvenido de nuevo
      </h1>
      <div className="flex items-center space-x-4">
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {currentTheme === 'light'? (
            <FiMoon className="text-xl" />
          ) : (
            <FiSun className="text-xl" />
          )}
        </motion.button>
        <motion.button
          onClick={handleNotificationClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Notifications"
        >
          <FiBell className="text-xl" />
        </motion.button>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <FiUser className="text-2xl text-gray-600 dark:text-gray-400" />
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Usuario Demo
          </span>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;