import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiList, FiFileText } from 'react-icons/fi';
import { initialProjects, initialTasks, initialNotes } from '../../data/initialData';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Dashboard() {
  const activeProjects = initialProjects.filter(p => p.status!== 'Hecho').length;
  const completedTasks = initialTasks.filter(t => t.status === 'Hecho').length;
  const upcomingTasks = initialTasks.filter(t => t.status!== 'Hecho' && new Date(t.dueDate) > new Date()).length;
  const totalDocuments = initialNotes.length;

  const recentActivity = initialTasks
   .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate)) // Simplificado: ordenar por fecha de vencimiento
   .slice(0, 5);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg shadow-md flex items-center space-x-4"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <FiList className="text-4xl text-blue-600 dark:text-blue-300" />
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Proyectos Activos</p>
            <p className="text-3xl font-bold text-blue-800 dark:text-blue-100">{activeProjects}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-green-100 dark:bg-green-800 p-6 rounded-lg shadow-md flex items-center space-x-4"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <FiCheckCircle className="text-4xl text-green-600 dark:text-green-300" />
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Tareas Completadas</p>
            <p className="text-3xl font-bold text-green-800 dark:text-green-100">{completedTasks}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-lg shadow-md flex items-center space-x-4"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <FiClock className="text-4xl text-yellow-600 dark:text-yellow-300" />
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Tareas Próximas</p>
            <p className="text-3xl font-bold text-yellow-800 dark:text-yellow-100">{upcomingTasks}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg shadow-md flex items-center space-x-4"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <FiFileText className="text-4xl text-purple-600 dark:text-purple-300" />
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Total de Documentos</p>
            <p className="text-3xl font-bold text-purple-800 dark:text-purple-100">{totalDocuments}</p>
          </div>
        </motion.div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Actividad Reciente</h3>
        <ul className="space-y-3">
          {recentActivity.map((activity, index) => (
            <motion.li
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <FiClipboard className="text-xl text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{activity.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
      Proyecto: {initialProjects.find(p => p.id === activity.projectId)?.name ?? 'N/A'}
    </p>
  </div>
</div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                activity.status === 'Hecho'? 'bg-green-200 text-green-800' :
                activity.status === 'En Progreso'? 'bg-blue-200 text-blue-800' :
                'bg-gray-200 text-gray-800'
              }`}>
                {activity.status}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;