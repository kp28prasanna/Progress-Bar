import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, Max }) => {
    const [percentage,setPercentage] = useState(value)
    const [status,setStatus] = useState(false)
    useEffect(()=>{
        setPercentage(Math.min(Max,Math.max(value,0)))
        if(value===Max) setStatus(true)
    },[value])
  return (
    <>
    <div className="progress">
      <span style={{color : percentage > 49 ? "white" : "black"}}>{percentage?.toFixed()}%</span>
      <div 
      style={{width:`${percentage}%`}}
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={percentage.toFixed()} />
    </div>
    <span className="status">{status? 'Completed...!':'Loading...'}</span>
    </>
  );
};
export default ProgressBar;
