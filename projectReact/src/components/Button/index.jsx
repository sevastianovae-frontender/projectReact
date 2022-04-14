import React from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";

const handleClick=()=>{
  alert("Вы уверены?")
}
const _Button = () => {
  return (
    <Link to={`/newpost`}>
    <Button style={{borderColor: 'CornflowerBlue'}} onClick={handleClick} >
      Создать пост
    </Button>
    </Link>
  );

};

export default _Button;
