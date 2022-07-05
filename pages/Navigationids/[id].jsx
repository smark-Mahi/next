import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addfields,deletefields } from '../../features/Forms'
const Details = () => {
    const dispatch=useDispatch()
    const forms=useSelector((state)=>state.form.value)
  return (
    <div>
      {
       forms.map((item)=>
       <div key={item.id}>
        <h3>{item.id}</h3>
        <h3>{item.nam}</h3>
        <h3>{item.description}</h3>
        <button onClick={()=>{dispatch(deletefields({id:item.id}))}}>DELETE</button>
       </div>
       )
    }
    </div>
  )
}

export default Details
