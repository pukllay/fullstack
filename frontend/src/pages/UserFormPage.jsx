import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createUser, deleteUser, updateUser, getUser} from '../api/user.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export function UserFormPage(){
  const {
    register, 
    handleSubmit, 
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) =>{
    if (params.id){
      await updateUser(params.id, data)
      toast.success('Usuario actualizada', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }else{
      await createUser(data);
      toast.success('Usuario creado', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }
    navigate("/user");
  });

  useEffect(()=> {
    async function loadUser(){
      if (params.id){
        const {
          data: { first_name, last_name, email, age },
        } = await getUser(params.id);
        setValue('first_name', first_name);
        setValue('last_name', last_name);
        setValue('email', email);
        setValue('age', age);
      }
    }
    loadUser();
  },[]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="" id="" placeholder="Nombre"
        {...register("first_name", {required: true})}
        />
        <input type="text" name="" id="" placeholder="apellido"
        {...register("last_name", {required: true})}
        />
        <input type="email" name="" id="" placeholder="correo"
        {...register("email", {required: true})}
        />
        <input type="text" placeholder="Edad"
          {...register("age", {
            required: true,
            validate: value => value >= 0 && value <= 150 || "La edad debe ser un número entre 0 y 150"
          })}
        />
        {errors.first_name && <span>El nombre es requerido</span>}
        {errors.last_name && <span>El apellido es requerido</span>}
        {errors.email && <span>El correo es requerido</span>}
        {errors.age && <span>{errors.age.message}</span>}
        <button>Guardar</button>
      
      </form>
      {params.id && (
        <button
          onClick={async () =>{
            const accepted = window.confirm("¿ESTA SEGURO?");
            if (accepted){
              await deleteUser(params.id);
              toast.success('usuario eliminado', {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff",
                },
              });
              navigate("/user");
            }
          }}
        >eliminar</button>
        )}
      </div>
    );
}