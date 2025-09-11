import React, { useState } from 'react';
function AddTask(){
    const [newtask,setnewtask] = useState("");
    const [newlist,setnewlist] = useState([]);

    function add(e){
        e.preventDefault();
        setnewlist( [...newlist, newtask]);
        setnewtask("");
    }
    function handleclear(){
        setnewlist([]);
    }  
     return(
        <>
       <div className='add'>
       <form onSubmit={add}>
        <input value={newtask} onChange={e=>setnewtask(e.target.value)}   placeholder='add task'></input>
        <button  onClick={add}>Add</button>  
        </form>
       </div>
       <div className='Tasks'>
        <b>Todo</b>
        <button className='btn2' onClick={handleclear}>Clear All</button>

        <div className='tasklist'>
        { newlist.map((task, index)=>(
            <div className="card" key={index}>{task}</div>
         ))
        }
        </div>
      </div>
      </>
    );
}
export default AddTask;