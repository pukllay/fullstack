import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export function TaskFormPage(){
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
      await updateTask(params.id, data)
      toast.success('Tarea actualizada', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }else{
      await createTask(data);
      toast.success('Tarea creada', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }
    navigate("/tasks");
  });

  useEffect(()=> {
    async function loadTask(){
      if (params.id){
        const {
          data: { title, description },
        } = await getTask(params.id);
        setValue('title', title);
        setValue('description', description);
      }
    }
    loadTask();
  },[]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="" id="" placeholder="title"
        {...register("title", {required: true})}
        />
        {errors.title && <span>title is required</span> }
        <textarea rows="3" name="" id="" placeholder="Description"
        {...register("description", {required:true})}
        ></textarea>
        {errors.description && <span>description is required</span> }
        <button>Save</button>
      </form>
      {params.id && (
        <button
          onClick={async () =>{
            const accepted = window.confirm("are you sure?");
            if (accepted){
              await deleteTask(params.id);
              toast.success('Tarea eliminada', {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff",
                },
              });
              navigate("/tasks");
            }
          }}
        >Delete</button>
        )}
      </div>
    );
}