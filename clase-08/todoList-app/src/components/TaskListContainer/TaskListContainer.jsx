import { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { TaskList } from "../TaskList/TaskList";

export const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleChangeStatus = (id) => {
    // Buscamos la posición indice de la tarea
    const index = tasks.findIndex((task) => task.id === id);
    // Hacemos una copia de las tareas para no modificar la original 
    const updateTasks = [...tasks];
    // Modificamos el estado de la tarea
    updateTasks[index] = {
        ...updateTasks[index],
        status: !updateTasks[index].status // Si estaba en false lo pasamos a true o viceversa
    }
    setTasks(updateTasks);

  };

  const handleDeleteTask = (id) => { 
        const tasksFilter = tasks.filter( task => task.id !== id);
        setTasks(tasksFilter);
  }

  return (
    <div className="d-flex flex-column col-6">
      <FormInput addTask={handleAddTask} />
      <TaskList tasks={tasks} changeStatus={handleChangeStatus} deleteTask={handleDeleteTask} />
    </div>
  );
};
