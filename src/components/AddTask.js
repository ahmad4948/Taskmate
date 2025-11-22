import React, { useState } from 'react';
function AddTask(){
    const [newtask,setnewtask] = useState("");
    const [newlist,setnewlist] = useState([]);
    const [editindex,seteditindex] = useState(null);

    function add(e){
        e.preventDefault();
        if(!newtask.trim()){
            return;
        }
        if(editindex!==null){
           setnewlist(newlist.map((task,i)=> i===editindex?newtask:task));
           seteditindex(null);
        }
        else{
        setnewlist( [...newlist, newtask]);
        }
        setnewtask("");
    }
    function handleclear(){
        setnewlist([]);
    }  
    function removetask(index){
        setnewlist(newlist.filter((task,i)=>i!==index));
    }
     return(
        <>
       <div className='add'>
       <form onSubmit={add}>
        <input value={newtask} onChange={e=>setnewtask(e.target.value)}   placeholder='add task'></input>
        <button  onClick={add} class="addbtn">Add</button>  
        </form>
       </div>
       <div className='Tasks'>
        <b>Todo</b>
        <button className='btn2' onClick={handleclear}>Clear All</button>

        <div className='tasklist'>
        { newlist.map((task, index)=>(
            <div className="card" key={index}>
            <span>{task}</span>
            <div className='icons'>
            <img className="edit" src="edit.PNG" alt="edit button" onClick={()=>{
                setnewtask(task);
                seteditindex(index);
            }}></img>
            <img src="bin.PNG" className='bin' alt="delete button" onClick={()=>removetask(index)}></img>
            </div>

            </div>
         ))
        }
        </div>
      </div>
      </>
    );
}
export default AddTask;