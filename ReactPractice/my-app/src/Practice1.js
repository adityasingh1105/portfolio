import "./App.css";
import { useState } from "react";
import Student from "./Student";
function Practice1() {
  const [data, setdata] = useState(0);
  function updateData() {
    setdata(data + 1);
  }
  //////////////
  const [name, setname] = useState("Aditya");
  function updateName() {
    setname("Ankitaa");
  }
  /////////////////
  const [getInputData, setgetInputData] = useState();
  function getData(valueGet) {
    setgetInputData(valueGet.target.value);
  }

  ////
  const [print, setprint] = useState(false);

  //Hide Show//

  const [visible, setvisible] = useState(true);
  console.log(visible);
  return (
    <div className="App">
      {/* <h1>{getInputData}</h1> */}
      <Student name={name} email="adi@adi.com" />
      <button onClick={updateName}>Update Name</button> <br />
      <br />
      <button onClick={updateData}>Click Me</button>
      <br />
      <br />
      <input type="text" onChange={getData} />
      <br />
      <br />
      <div className="App"> {print ? <h6>{getInputData} </h6> : null}</div>
      <br />
      <br />
      <button onClick={() => setprint(true)}>Print Data </button>
      <br />
      <br />
      <button className="App" onClick={() => setvisible(!visible)}>
        Name Change
      </button>
      <br />
      <br />
      <button className="App" onClick={() => setvisible(true)}>
        Aditya
      </button>
      <br />
      <br />
      <button className="App" onClick={() => setvisible(false)}>
        Singh
      </button>
      <br />
      <br />
      <form></form>
      <div className="App"> {visible ? <h6>Aditya</h6> : <h6>Singh</h6>}</div>
    </div>
  );
}
export default Practice1;
