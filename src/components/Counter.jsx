import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'

function Counter() {
  const count =useSelector((state)=>state.counter.count)
  const dispatch =useDispatch()
  const [amount,setAmount]=useState("")
  const handleIncrement=()=>{
    if(!amount){
      alert("pls enter the amount")

    }else{
     dispatch(incrementByAmount(Number(amount)))
    }
  }
  return (
    <div style={{height:"70vh"}} className='w-100 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center border rounded p-5 w-55 flex-column'>
                <h1 style={{fontSize:"100px"}}>{count}</h1>
                <div className='w-100 d-flex justify-content-center align-items-center'>
                    <div onClick={()=>dispatch(increment())} className="btn btn-warning">Increment</div>
                    <div onClick={()=>dispatch(decrement())} className="btn btn-success">Decrement</div>
                    <div onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</div>
                </div>
                <div className="d-flex">
                  <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control' placeholder='add amount to be  incremented' />
                  <button onClick={handleIncrement} className='btn btn-info ms-5'>Increment Amount</button>
                </div>
        </div>
    </div>
  )
}

export default Counter