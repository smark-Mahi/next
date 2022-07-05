import React, { useEffect } from 'react'
import styles from '../styles/Sidebar.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { addfields,deletefields } from '../features/Forms'
import Link from 'next/link'
const Form2 = () => {
    const [dataa,setdataa]=React.useState({id:'',nam:'',description:''})
    const dispatch=useDispatch()
    const forms=useSelector((state)=>state.form.value)
    console.log(forms)
    
  function handleAdd(){
    setdataa({id:'',nam:'',description:''})
    //setdata([...data,dataa])
    //console.log(dataa)
    dispatch(addfields({
        id:dataa.id,
        nam:dataa.nam,
        description:dataa.description
    }))
   
 }
 

  return (
    <div className={styles.container}>
   
      
      <label>Id:</label><br/>
        <input value={dataa.id} onChange={(e)=>setdataa({...dataa,id:e.target.value})}/><br/>
        <label>Name:</label><br/>
        <input value={dataa.nam} onChange={(e)=>setdataa({...dataa,nam:e.target.value})}/><br/>
        <label>Description:</label><br/>
        <input value={dataa.description} onChange={(e)=>setdataa({...dataa,description:e.target.value})}/><br/>
        <button onClick={handleAdd}>Add</button>
      
      {
       forms.map((item)=>
       <div key={item.id}>
        <h3>{item.id}</h3>
        <h3>{item.nam}</h3>
        <h3>{item.description}</h3>
        <button onClick={()=>{dispatch(deletefields({id:item.id}))}}>DELETE</button>
        <button><Link href={`/Navigationids/${item._id}`} passHref >View</Link></button>
       </div>
       )
    }
    </div>
  )
}

export default Form2
