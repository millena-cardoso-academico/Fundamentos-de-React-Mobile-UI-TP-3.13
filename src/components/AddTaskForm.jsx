import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddTaskForm.css';

const AddTaskForm = ({ category, addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(category, task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={`Adicionar tarefa em ${category}`}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  category: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default AddTaskForm;