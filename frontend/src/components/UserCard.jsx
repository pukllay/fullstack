import {useNavigate} from 'react-router-dom'
export function UserCard({user}){
  const navigate = useNavigate()
  return(
      <div style={{background: "green"}}
        onClick={()=>{
          navigate(`/user/${user.id}`)
        }}
      >
        <h1>{user.first_name}</h1>
        <p>{user.last_name}</p>
        <p>{user.email}</p>
        <p>{user.age}</p>
        <hr />
      </div>
  )
}