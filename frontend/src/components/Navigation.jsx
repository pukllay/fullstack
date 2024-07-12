import { Link } from "react-router-dom";
export function Navigation(){
  return(
    <div>
      <Link to="/user">USUARIOS</Link>
      {/* <Link to="/tasks">tareas</Link> */}
      <br />
      <Link to="/user-create">CREAR USUARIO</Link>
      {/* <Link to="/tasks-create">create task</Link> */}
    </div>
  )
}