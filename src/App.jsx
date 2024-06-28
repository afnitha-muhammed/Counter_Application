import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increament, reset } from './redux/counterslice'

function App() {

  const count = useSelector((state)=>state.counterReducer.value)

  const dispatch = useDispatch()

  return (
    <>
    <div style={{backgroundColor:'black',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div style={{backgroundColor:'white',width:'500px'}} className='p-5 rounded'>
        <h1 className='text-info'>Counter Application</h1>
        <h1 className='text-center my-5' style={{fontSize:'70px'}}>{count}</h1>
        <div className='mt-5 d-flex justify-content-evently align-items-center'>
            <button type='button' className='btn btn-warning ms-3'  onClick={()=>dispatch(decrement())}>Decrement</button>
            <button type='button' className='btn btn-danger ms-3' onClick={()=>dispatch(reset())}>Reset</button>
            <button type='button' className='btn btn-success ms-3' onClick={()=>dispatch(increament())}>Increment</button>
        </div>
        <div className='d-flex mt-5'>
          <input type="text" placeholder='Range' className='form-control' />
          <button className='btn btn-primary ms-3'>Click</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
