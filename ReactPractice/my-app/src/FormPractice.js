import React, { useState } from "react";
import "./App.css";

function FormPractice() {
  const [Name, setname] = useState("");
  function getFormData(e) {
    e.preventDefault();
    console.log(Name, Intrest, Check);
  }

  const [Intrest, setIntrest] = useState("");
  const [Check, setCheck] = useState(false);
  return (
    <>
      <div className="App">FormPractice</div>
      <div className="App">
        <form onSubmit={getFormData}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
          ></input>
          <br />
          <select onChange={(e) => setIntrest(e.target.value)}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Not Disclosed</option>
          </select>
          <br />
          <input
            type="checkbox"
            onChange={(e) => setCheck(e.target.checked)}
          ></input>
          <span>Accept Terms And Condtions</span>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormPractice;
