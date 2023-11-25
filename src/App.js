import './App.css';
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";
const App = () => {
  const [progressValue, setProgressValue] = useState(0)
  useEffect(()=>{
    setInterval(() => {
      setProgressValue((prevValue)=>prevValue+1)
    }, 200);
  },[])
  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar value={progressValue} Max={30} />
      <ProgressBar value={progressValue} Max={70}/>
      <ProgressBar value={progressValue} Max={100} />
    </div>
  );
}


export default App;
