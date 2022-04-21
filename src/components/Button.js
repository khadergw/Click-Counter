import React, {useState} from "react";

const Button = () => {
  const [CurrentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(CurrentCount+1)
  }

 
  const ParentStyle = {
    textAlign: "center"
  }

  const ButtonStyle = {
    backgroundColor:"red",
    color: "white",
    fontSize: "30px",
    fontWeight: "bolder",
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    border: "5px solid black",
    marginTop: "5%",
    cursor: "pointer",
    boxShadow: "7px 3px gray" 

  }

  const DisplayStyle = {
    color: "black",
    fontSize: "35px",
    fontWeight: "bolder",
    marginTop: "5%"
  }


  return <div style={ParentStyle}>
  <button style={ButtonStyle} onClick={handleClick}>Plus 1</button>

<div style={DisplayStyle}>{CurrentCount}</div>

  </div>

}

export default Button