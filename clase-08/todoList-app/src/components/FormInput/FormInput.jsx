import { useState } from "react"
import { v4 as uuid } from "uuid"

export const FormInput = ( { addTask } ) => {
    const [task, setTask] = useState("");

    const handleInputChange = (e) => { 
        // Almacenamos el valor del input en nuestro state task 
          setTask(e.target.value)
     } 

    const handleFormSubmit = (e) => { 
        e.preventDefault();
        const newTask = {
            id: uuid(), // Identificador único de la tarea
            task, // El texto de la tarea a realizar 
            status: false // Si la tarea está realizada o no
        }
        
        addTask(newTask);
        setTask("");
     }
     

  return (
    <form onSubmit={handleFormSubmit} className="d-flex col">
        <input 
        type="text"
        className="form-control border border-2 border-black"
        placeholder="Ingrese el texto aquí"
        value={task}
        onChange={handleInputChange}
        />
        <input type="submit" className="btn btn-primary mx-2" value="Agregar"  />  
    </form>
  )
}
