import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { motion } from 'framer-motion';

function KanbanColumn({ id, title, children, color }) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <motion.div
      ref={setNodeRef}
      className={`p-4 rounded-lg shadow-md min-h-[200px] ${color} ${isOver? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h3>
      <div className="space-y-3">
        {children}
      </div>
    </motion.div>
  );
}

export default KanbanColumn;