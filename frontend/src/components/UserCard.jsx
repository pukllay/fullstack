import {useNavigate} from 'react-router-dom'
export function UserCard({user}){
  const navigate = useNavigate()
  return(
      <div style={{background: "green"}}
        onClick={()=>{
          navigate(`/user/${user.id}`)
        }}
      >
        <p><b>Nombre:</b> {user.first_name}</p>
        <p><b>Apellido:</b> {user.last_name}</p>
        <p><b>Correo:</b> {user.email}</p>
        <p><b>Edad:</b> {user.age}</p>
        <hr />
      </div>
  )
}