import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './features/dashboard/Dashboard';
import ProjectBoard from './features/projects/ProjectBoard';
import NotesEditor from './features/notes/NotesEditor';
import ProductivityReports from './features/reports/ProductivityReports';
import UserSettings from './features/settings/UserSettings';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light'); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light'? 'dark' : 'light'));
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectBoard />} />
            <Route path="/notes" element={<NotesEditor />} />
            <Route path="/reports" element={<ProductivityReports />} />
            <Route path="/settings" element={<UserSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;