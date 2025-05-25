import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiClipboard,
  FiBook,
  FiBarChart2,
  FiSettings,
  FiFolder,
} from 'react-icons/fi';

const sidebarVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const linkVariants = {
  initial: { x: 0 },
  hover: { x: 5, transition: { type: 'spring', stiffness: 300 } },
};

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: FiHome, path: '/' },
    { name: 'Projects', icon: FiFolder, path: '/projects' },
    { name: 'Tasks', icon: FiClipboard, path: '/tasks' },
    { name: 'Reports', icon: FiBarChart2, path: '/reports' },
    { name: 'Documents', icon: FiBook, path: '/documents' },
    { name: 'Settings', icon: FiSettings, path: '/settings' }
  ];

  return (
    <motion.aside
      className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="text-2xl font-bold text-primary dark:text-secondary mb-8">
        TaskFlow
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map(item => (
            <li key={item.name} className="mb-4">
              <motion.div
                variants={linkVariants}
                whileHover="hover"
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                   ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="mr-3 text-xl" />
                <Link to={item.path} className="font-medium text-lg flex-1">
                  {item.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}

export default Sidebar;