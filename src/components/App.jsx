import { useState } from 'react';
import CategoryList from './CategoryList';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import ThemeToggle from './ThemeToggle';
import '../styles/App.css';

const initialTasks = {
  mercado: ['Comprar leite', 'Comprar pão'],
  farmácia: ['Comprar remédio para dor de cabeça'],
  estudos: ['Estudar React', 'Ler documentação sobre Hooks']
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('mercado');
  const [tasks, setTasks] = useState(initialTasks);
  const [theme, setTheme] = useState('light');

  const addTask = (category, task) => {
    setTasks({
      ...tasks,
      [category]: [...tasks[category], task]
    });
  };

  const removeTask = (category, task) => {
    setTasks({
      ...tasks,
      [category]: tasks[category].filter(t => t !== task)
    });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      <h1>Lista de Tarefas</h1>
      <CategoryList categories={Object.keys(tasks)} selectCategory={setSelectedCategory} />
      <TaskList tasks={tasks[selectedCategory]} category={selectedCategory} removeTask={removeTask} />
      <AddTaskForm category={selectedCategory} addTask={addTask} />
    </div>
  );
}

export default App;