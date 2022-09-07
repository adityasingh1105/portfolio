import React, { useState } from "react";
import "./App.css";

function Profile() {
  const [LoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="App">
      <div>{LoggedIn?<h1>Hello</h1>:<h1>Bye Bye</h1>}</div>
    </div>
  );
}
 
export default Profile;
