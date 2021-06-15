import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();


ReactDOM.render(
  <>
    <h1>My Name is Prabhat Mishra</h1>
    <br></br><br></br>
    <p>
    <br></br>
    <u>Date</u> : <u>{" "+date}</u>
    <br></br>
    <br></br>
    <hr></hr>
    <br></br>

    <u>Time</u> : <u>{" "+time}</u>
    <br></br>
    <br></br>
    </p>
  </>,
   document.getElementById("root")
);




