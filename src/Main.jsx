import React, { useEffect, useState } from 'react';
import List from "./files/List.svg";
import axios from 'axios';


import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineFileAdd } from 'react-icons/ai';
import {AiOutlineEdit} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Main = () => {
    const [create, setCreate]= useState({
        title: "",
        description: ''
    });

    const [getlist, setGetlist]=useState([]);

    const handleChange=(e)=>{
      const {name, value}= e.target;
      setCreate({...create, [name]: value})
    }

    const submitList=(e)=>{
        e.preventDefault();

        const CreateList={
           title: create.title,
           description: create.description
        }

        axios.post("http://localhost:5000/create", CreateList);

        setCreate({
          title: "",
          description: ""
        })
        
    }

    useEffect(()=>{
       const GetList= async()=>{
         try {
           const list= await axios.get("http://localhost:5000/");
           setGetlist(list.data)
           
         } catch (error) {
            console.log(`cannot get list`);
         }
       }
       GetList();
    },[getlist]);

    const DeletePost= async(id)=>{
        try {
          await axios.delete(`http://localhost:5000/delete/${id}`);
          console.log(`task deleted`);
          
        } catch (error) {
          console.log(`task can't be deleted`);
        }
       
    }

    return (
             <div className="main">
             <div className="main-left">
              <h1 className="main-heading">Create your list</h1>
               
               <form  className="main-left-form">
                 <label htmlFor="list title" className="main-left-label">enter title</label>
                 <input type="text" className="main-left-input" name="title" value={create.title} onChange={handleChange} />
                 <label htmlFor="list description" className="main-left-label">enter description</label>
                 <input type="text" className="main-left-input" name="description" value={create.description} onChange={handleChange} />
                 <button className="btn mt" type="submit" onClick={submitList}><AiOutlineFileAdd /></button>
               </form>
 
               <figure className="main-left-figure">
                 <img src={List} alt="list" className="main-left-pic" />
               </figure>
             </div>
             <div className="main-right">
             {
               getlist.map((value)=>{
                 return(
                   <div className="main-right-box" key={value._id}>
                      <div className="main-right-list">
                         <h2 className="sub-heading">{value.title}</h2>
                         <h3 className="description">{value.description}</h3>
                       </div>
                 
                   <button className="btn" onClick={()=> DeletePost(value._id)}><AiOutlineDelete /></button>
                   <Link to={`/update/${value._id}`} className="btn"><AiOutlineEdit /></Link>
                 </div>
                 )
               })
                
             }
             </div>
         </div>
    )
}

export default Main
