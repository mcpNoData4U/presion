import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';

function KanbanCard({ task, isOverlay }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isOverlay? 0.8 : 1,
    zIndex: isOverlay? 999 : 'auto',
    boxShadow: isOverlay? '0px 8px 16px rgba(0, 0, 0, 0.2)' : 'none',
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgente': return 'bg-red-500';
      case 'Alta': return 'bg-orange-500';
      case 'Media': return 'bg-yellow-500';
      case 'Baja': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm cursor-grab ${isOverlay? 'absolute' : ''}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{task.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{task.description}</p>
      <div className="flex items-center justify-between text-xs mt-2">
        <span className={`px-2 py-1 rounded-full text-white ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          Vence: {task.dueDate}
        </span>
      </div>
    </motion.div>
  );
}

export default KanbanCard;