import React ,{ useEffect }  from 'react'
import styles from '../styles/Sidebar.module.css'
import Form from './Form'
import {useDispatch,useSelector} from 'react-redux'
import { addfields } from '../features/Forms'
const Sidebar = () => {
    const [data,setdata]=React.useState([])
    const dispatch=useDispatch()
    const counter=useSelector((state)=>state.form.value)
     function handler(datas){
        console.log(datas)
        setdata([datas,...data])
       
     }
    function handledlete(id){
          const newdata=data.filter((items)=>{
            return items.id !== id
          })
          setdata(newdata)
     }
    useEffect(()=>{
        window.localStorage.setItem('user',JSON.stringify(data))
    },[data])
    useEffect(()=>{
        const ajao=JSON.parse(window.localStorage.getItem('user'));
       setdata(ajao)
    },[])
  return (
    <div className={styles.container}>
<h1>{data.nam}</h1>
     {data.map((item)=>
     <div key={item.id}>
     <h3>{item.id}</h3>
        <h3>{item.nam}</h3>
        <h3>{item.description}</h3>
        <button onClick={()=>handledlete(item.id)}>DELETE</button>
     </div>
     
     )}
     <Form handler={handler}/>
    </div>
  )
}

export default Sidebar
