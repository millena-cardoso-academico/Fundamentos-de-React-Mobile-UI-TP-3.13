import PropTypes from 'prop-types';
import '../styles/TaskList.css';

const TaskList = ({ tasks, category, removeTask }) => {
  return (
    <div className="task-list">
      <h2>Tarefas de {category}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(category, task)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TaskList;