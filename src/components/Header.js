import React, {useState,useEffect} from 'react';
function Header(){
  const [dark,setdark] = useState(false);

  useEffect(()=>{
    if(dark){
      document.body.style.backgroundColor = "black";
    }
    else{
      document.body.style.backgroundColor = "#f5f5f2";
    }
  }, [dark]);

    return(
      <header>
       <img src="banana.JPG" className="banana"/>
        <h1>Taskmate</h1>
        <button className={dark? "white":"black"} onClick={()=>setdark(d =>!d)}>
        
        </button>
      </header>
    );
}
export default Header;