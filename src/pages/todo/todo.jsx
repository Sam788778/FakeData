import { useState } from 'react';
import Input from '../../components/input/input';
import List from '../../components/list/list';

const Todo = ({ initialTodos }) => {
  const [tasks, setTasks] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: inputValue,
      completed: false
    };

    setTasks(prev => [...prev, newTask]);
    setInputValue('');
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onAdd={addTask}
      />
      <List tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
};

export default Todo;