import React, { useState, useEffect } from 'react';
import { BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import { initialNotes } from '../../data/initialData';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { toast } from 'react-toastify';

function NotesEditor() {
  // Usar useLocalStorage para persistir el contenido de las notas
  const [notesContent, setNotesContent] = useLocalStorage('appNotesContent', initialNotes.content);
  const [currentNoteId, setCurrentNoteId] = useState(initialNotes.id);
  const [noteTitle, setNoteTitle] = useState(initialNotes.title);

  const editor = useCreateBlockNote({
    initialContent: notesContent,
  });

  useEffect(() => {
    // Cuando cambia la nota seleccionada, actualizar el editor
    const selectedNote = initialNotes.find(note => note.id === currentNoteId);
    if (selectedNote) {
      editor.replaceBlocks(editor.document, selectedNote.content);
      setNoteTitle(selectedNote.title);
      setNotesContent(selectedNote.content); // Sincronizar con localStorage
    }
  }, [currentNoteId, editor]);

  const handleEditorChange = () => {
    const newContent = editor.document;
    setNotesContent(newContent); // Guardar automáticamente en localStorage
    // Aquí podrías también actualizar la nota en `initialNotes` si fuera un estado global
    // o enviarla a un backend.
  };

  const handleSaveNote = () => {
    // En una aplicación real, esto guardaría la nota en una base de datos.
    // Aquí, simplemente confirmamos que se ha "guardado" localmente.
    toast.success('Nota guardada localmente!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex h-full bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      {/* Sidebar de notas */}
      <div className="w-64 border-r border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Mis Notas</h3>
        <ul className="space-y-2">
          {initialNotes.map(note => (
            <li key={note.id}>
              <button
                onClick={() => setCurrentNoteId(note.id)}
                className={`w-full text-left p-2 rounded-md transition-colors duration-200 ${
                  currentNoteId === note.id
                   ? 'bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {note.title}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => toast.info('La creación de nuevas notas no está implementada en esta demo.', { theme: "dark" })}
          className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          + Nueva Nota
        </button>
      </div>

      {/* Área del editor */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-4">
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="w-full text-3xl font-bold bg-transparent border-none focus:outline-none text-gray-900 dark:text-gray-100 mb-2"
            placeholder="Título de la nota"
          />
        </div>
        <div className="blocknote-editor-wrapper">
          <BlockNoteView editor={editor} onChange={handleEditorChange} />
        </div>
        <button
          onClick={handleSaveNote}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          Guardar Nota
        </button>
      </div>
    </div>
  );
}

export default NotesEditor;