import React from 'react'
import { increase} from '../features/Counter'
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'

const Increase = () => {
    const dispatch=useDispatch()
const counter=useSelector((state)=>state.come.value)
  return (
    <div style={{position:`relative`,left:`120px`,bottom:`60px`}}>
     <h1>{counter.count}t</h1>
      <button onClick={()=>{dispatch(increase({count:counter.count+1}));}}>button</button>
    </div>
  )
}

export default Increase
