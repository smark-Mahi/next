import React,{useEffect} from 'react'

const Form = ({handler}) => {
 
  const [dataa,setdataa]=React.useState({id:'',nam:'',description:''})
  function handleAdd(e){
    e.preventDefault();
    //setdata([...data,dataa])
    handler(dataa)
    //console.log(dataa)
    setdataa({id:'',nam:'',description:''})
 }
 

  return (
    <div>
    
   
    
      <form onSubmit={handleAdd}>
      <label>Id:</label>
        <input onChange={(e)=>setdataa({...dataa,id:e.target.value})}/>
        <label>Name:</label>
        <input onChange={(e)=>setdataa({...dataa,nam:e.target.value})}/>
        <label>Description:</label>
        <input onChange={(e)=>setdataa({...dataa,description:e.target.value})}/><br/>
        <button>Add</button>
      </form>
    </div>
  )
}

export  default  Form
