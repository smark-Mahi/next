import React from 'react'
import { increment } from '../features/Inputredux'
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'

const Input = () => {
 const [text,settext]=useState('')
const dispatch=useDispatch()
const counter=useSelector((state)=>state.counter.value)
function chng(e){
settext(e.target.value)
dispatch(increment(text))
}
  return (
    <div style={{position:`relative`,left:`10px`,bottom:`90px`}}>
      <h1 >{counter}</h1>
      <input type="text" onChange={chng} />
    </div>
  )
}

export default Input
