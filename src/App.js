import logo from './logo.svg';
import './App.css';
import { forwardRef, useRef, useState } from 'react';

const exData = [1,2,3,4,5,6,7,8,9,10]

function App() {
  let [state, setState ]= useState({
    input1 : '',
    input2 : ''
  })
  const input1Ref = useRef({
    input1 : '',
    input2 : ''
  });

  const [data, setData] = useState([])
  console.log('랜더링')
  return (
    <div>
      <State state={state} setData={setData} setState={setState} />
      <Ref ref={input1Ref} setData={setData} />
      {data.map((item)=> (
        <div key={item} > {item} </div>
      ))}
    </div>
  );
}

function State ({state, setState, setData}) {
  const onChange1 = (e)=>{
    state.input1 = e.target.value
  }
  const onChange2 = (e)=>{
    state.input2 = e.target.value
  }

  const handleSumbit = (e)=> {
    e.preventDefault()
    console.log(state.input1, state.input2)
    // setState({...state})
    setTimeout(()=> {
      setData(exData)
    },2000)
  }
  
  return <form onSubmit={handleSumbit} >
    <input  onChange={onChange1} />
    <input  onChange={onChange2} />
    <button>제어컴포넌트 버튼</button>
  </form>
}


const Ref = forwardRef(({setData}, ref) => {
  const handleSumbit = (e)=> {
    e.preventDefault()
    console.log(ref.current.input1.value, ref.current.input2.value)
    setTimeout(()=> {
      setData(exData)
    },2000)
  }
  return <form onSubmit={handleSumbit} > 
    <input ref={el => (ref.current.input1= el)} />
    <input ref={el => (ref.current.input2= el)}  />
    <button>비제어컴포넌트 버튼</button>
  </form>
})

export default App;
