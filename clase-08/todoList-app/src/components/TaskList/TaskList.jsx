import { Task } from "../Task/Task"

export const TaskList = ({tasks, changeStatus, deleteTask}) => {
  return (
    <>
        { tasks.map( task => <Task key={task.id} {...task} changeStatus={changeStatus} deleteTask={deleteTask} />) }
    </>
  )
}
