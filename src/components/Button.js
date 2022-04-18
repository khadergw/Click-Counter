import React, {useState} from "react";

const Button = () => {
  const [CurrentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(CurrentCount+1)
  }

  return <div>
  <button onClick={handleClick}>Plus 1</button>

<div>{CurrentCount}</div>

  </div>

}

export default Button