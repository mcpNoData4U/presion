import React, { useState } from 'react';
import { DndContext, closestCorners, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import KanbanColumn from './KanbanColumn';
import KanbanCard from './KanbanCard';
import { initialTasks } from '../../data/initialData';
import { toast } from 'react-toastify';

function ProjectBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeId, setActiveId] = useState(null);

  const columns = [
    { id: 'todo', title: 'Pendientes', color: 'bg-red-200' },
    { id: 'inProgress', title: 'En Proceso', color: 'bg-blue-200' },
    { id: 'completed', title: 'Completadas', color: 'bg-green-200' },
  ];

  const getTasksByColumn = (columnId) => {
    return tasks.filter(task => task.status === columnId);
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeTask = tasks.find(task => task.id === active.id);
    const overColumnId = over.id;

    if (activeTask && activeTask.status!== overColumnId) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === active.id? {...task, status: overColumnId } : task
        )
      );
      toast.success(`Tarea "${activeTask.title}" movida a "${overColumnId}"`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", // O el tema actual
      });
    }
    setActiveId(null);
  };

  const activeTask = activeId? tasks.find(task => task.id === activeId) : null;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Tablero de Proyectos</h2>

      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-wrap gap-4 overflow-x-auto pb-4">
          {columns.map(column => (
            <div key={column.id} className="flex-shrink-0 w-72">
              <SortableContext items={getTasksByColumn(column.id).map(task => task.id)} strategy={verticalListSortingStrategy}>
                <KanbanColumn id={column.id} title={column.title} color={column.color}>
                  {getTasksByColumn(column.id).map(task => (
                    <KanbanCard key={task.id} task={task} />
                  ))}
                </KanbanColumn>
              </SortableContext>
            </div>
          ))}
        </div>

        <DragOverlay>
          {activeTask? <KanbanCard task={activeTask} isOverlay /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default ProjectBoard;