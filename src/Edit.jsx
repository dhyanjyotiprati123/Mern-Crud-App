import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { AiOutlineEdit } from 'react-icons/ai';

const Edit = () => {
    const [edit, setEdit]= useState({
        title: "",
        description: ""
    });

    const id=useParams();
    console.log(id.id);
    const history=useHistory();
  
    const handleChange=(e)=>{
        const {name, value}= e.target;
        setEdit({...edit, [name]: value})
    }

    const EditTask=async(e)=>{
        e.preventDefault();
        try {
            const updateTask= {
                title: edit.title,
                description: edit.description
            }

            await axios.patch(`http://localhost:5000/update/${id.id}`, updateTask);
            history.push("/");
            
        } catch (error) {
            alert(`cannot edit ${error}`)
        }
    }
    return (
        <div className="edit">
           <form  className="edit-form">
             <label htmlFor="list title" className="main-left-label">enter title</label>
             <input type="text" className="main-left-input" name="title" value={edit.title} onChange={handleChange} />
             <label htmlFor="list description" className="main-left-label">enter description</label>
             <input type="text" className="main-left-input" name="description" value={edit.description} onChange={handleChange} />
             <button className="edit-btn mt" type="submit" onClick={EditTask}><AiOutlineEdit /></button>
           </form>
        </div>
    )
}

export default Edit
