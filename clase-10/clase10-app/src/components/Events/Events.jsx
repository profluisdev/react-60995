
export const Events = () => {
    const handleInputKeyDown = (e) => {
        const vocals = ["a", "e", "i", "o", "u"];
        const key = e.key.toLowerCase();
        if (vocals.includes(key)) {
          console.log(`Se introdujo la vocal: ${key}`);
          e.preventDefault(); // Bloqueamos el evento onKeyDown
        }
      };
    
      const handleInputDni = (e) => {
        console.log(e.key);
        if (e.key == ".") {
          console.log("No se incluye el punto");
          e.preventDefault();
        }
      };
    
      // ------- Formulario --------------
    
      const [name, setName] = useState("");
      const [lastName, setLastName] = useState("");
      const [students, setStudents] = useState([]);
    
      const handleStudents = (e) => {
        e.preventDefault();
        const newStudent = {
          name,
          lastName,
        };
    
        setStudents([...students, newStudent]);
      };
    
      return (
        <div className="container mt-3">
          <h2>Eventos</h2>
          <label>Ingresar texto</label>
          <input className="form-control mt-3" type="text" onKeyDown={handleInputKeyDown} />
          <label>Ingresar DNI</label>
          <input className="form-control mt-3" type="number" onKeyDown={handleInputDni} />
    
          <hr className="mt-4 mb-4" />
          
          <form onSubmit={handleStudents}>
            <label>Nombre</label>
            <input className="form-control mt-3" type="text" onChange={(e) => setName(e.target.value)} />
            <label>Apellido</label>
            <input className="form-control mt-3" type="text" onChange={(e) => setLastName(e.target.value)} />
            <input className="btn btn-primary mt-3" type="submit" value="Agregar" />
          </form>
          <h3>Lista de Alumnos Desaprobados</h3>
          <ul>
            { students.map( (student, index) => <li key={index}> {student.name} {student.lastName} </li> ) }
          </ul>
        </div>
      );
    };
    