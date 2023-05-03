import "./App.css";
import React, { useState } from "react";

import MyTable from "./components/MyTable";

function App() {
  const header = ["#", "First Name", "Last Name", "UserName"];

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [body, setBody] = useState([
    {
      firstName: "Karam ",
      lastName: "Mustafa ",
      userName: "karam2mustafa",
    },
    {
      firstName: "Ali ",
      lastName: "Mustafa ",
      userName: "karam2mustafa",
    },
    {
      firstName: "Ahmed ",
      lastName: "Mustafa ",
      userName: "karam2mustafa",
    },
    {
      firstName: "Rama ",
      lastName: "Mustafa ",
      userName: "karam2mustafa",
    },
  ]);

  const add = () => {
    const newBody = body.concat({
      firstName: firstName.target.value,
      lastName: lastName.target.value,
      userName: username.target.value,
    });
    setBody(newBody);
  };

  const deleteRow = (index) => {
   const newBody = body.filter((item, i) => i !== index)
   setBody(newBody)
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <input
            onChange={setFirstName}
            className="form-control mb-2"
            placeholder="Enter the first name"
            // value={firstName}
          />
          <input
            onChange={setLastName}
            className="form-control mb-2"
            placeholder="Enter the last name"
            // value={lastName}
          />
          <input
            onChange={setUsername}
            className="form-control mb-2"
            placeholder="Enter the user name"
            // value={username}
          />
          <button className="btn btn-primary mb-2" onClick={add}>
            Add new
          </button>
        </div>
      </div>
      <MyTable header={header} body={body} onDelete={deleteRow} />
    </div>
  );
}

export default App;
