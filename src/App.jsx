import './App.css'
import Friends from './Friends';
import Team from './Team';
import User from './User';
import Counter from './counter';


function App() {
  function handleClick() {
    alert('React Here');
  }
  const addParam = (num) =>{
    alert(num + 5);
  } 

  return (
    <>
      <h1>React core concept</h1>

     <Friends></Friends>

      <User></User>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { alert('I learn React') }}>Click React</button>
      <button onClick={() => { addParam(6) }}>Add Param</button>
    </>
  )
}

export default App
