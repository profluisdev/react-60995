import { TaskListContainer } from "./components"

export const App = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5" >
        <h1>Todo App</h1>
        <TaskListContainer />
    </div>
  )
}
