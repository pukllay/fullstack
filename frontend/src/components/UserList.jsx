import { useEffect, useState } from "react";
import { getAllUser } from "../api/user.api";
import { UserCard } from "./UserCard";

export function UserList(){
  const [user, setUser] = useState([]);

  useEffect(() =>{
    async function loadUser(){
      const res = await getAllUser();
      setUser(res.data);
    }
    loadUser();
  }, []);
  return <div>
    {user.map(user =>(
      <UserCard key={user.id} user={user} />
    ))}
    </div>;
}