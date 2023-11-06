import React, { useMemo, useState } from "react";
import "./../../App.css";

function Memo() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  // Function to handle the click event and update c1
  const handleC1Click = () => {
    setC1((prevC1) => prevC1 + 1);
  };

  // Function to handle the click event and update c2
  const handleC2Click = () => {
    setC2((prevC2) => prevC2 + 1);
  };

  const isEven = useMemo(
    ()=>{
        if(c1 %2 == 0){
            return <p> c1 even </p>
        }
        return <p>c1 odd</p>
    },[c1]
    )


  return (
    <div className="buttons">
      <button onClick={handleC1Click}> {c1} </button>
      {isEven}
      <hr />
      <button onClick={handleC2Click}> {c2} </button>
    </div>
  );
}

export default Memo;
