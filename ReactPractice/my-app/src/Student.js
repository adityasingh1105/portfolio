import React from "react";

function Student(props) {
  return (
    <>

      <div> Hello {props.name} </div>
      <div>
      {props.apple}
      </div>
    </>
  );
}

export default Student;
