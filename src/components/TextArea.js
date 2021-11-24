import React, { useState } from 'react';

export default function TextArea(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter your text here");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea
          className="form-control"
          value= {text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
    </div>
  );
}
