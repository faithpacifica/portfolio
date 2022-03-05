import React from "react";
import "./progressbar.css"
import styled from "styled-components";

const Progress = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100vh;
    img{
      width:200px;
      object-fit:cover;
    }
`;
  
  const Bar = styled.div`
    width: 600px;
    height: 5px;
    background-image: linear-gradient(to right, rgb(252, 0, 255), rgb(3, 127, 255));
    transform-origin: left;
    animation: load 2s forwards;
  `;
 
  
 
const ProgressBar = () => {
  return (
    <Progress className="progress">
        <img src="../../../img/logo.svg" alt="logo" width="200"/>
      <Bar className="bar"></Bar>
    </Progress>
  );
};

export default ProgressBar;
