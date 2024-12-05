import { MoonIcon, SunIcon } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddTaskForm from './components/AddTaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import { Button } from './components/common/Button';
import { useAppDispatch } from './hooks/useAppDispatch';
import { RootState } from './store/store';
import { fetchTasks } from './store/taskSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const status = useSelector((state: RootState) => state.tasks.status);
  const [filter, setFilter] = useState<'all' | 'incomplete' | 'complete'>('all');
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const fetchData = useCallback(async () => {
    try {
      await dispatch(fetchTasks()).unwrap();
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again later.');
    }
  }, [dispatch]);

  useEffect(() => {
      fetchData();
  }, [filter, fetchData]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="w-full md:w-[768px] mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Task Manager</h1>
          <Button onClick={toggleDarkMode} variant="outline" size="icon">
            {darkMode ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </header>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <aside>
            <AddTaskForm />
          </aside>
        <div className="grid gap-8 py-6">
          <main>
            <div className="mb-2">
              <TaskFilter filter={filter} setFilter={setFilter} />
            </div>
            {status === 'loading' && <div className="text-gray-600 dark:text-gray-400">Loading tasks...</div>}
            {status === 'succeeded' && <TaskList tasks={filteredTasks} />}
            {status === 'failed' && <div className="text-red-500">Error loading tasks</div>}
          </main>

        </div>
      </div>
    </div>
  );
};

export default App;

