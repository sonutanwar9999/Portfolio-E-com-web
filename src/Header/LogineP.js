import axios from "axios";
import React, { useState } from "react";
// import App from "../App";

function LogineP(props) {
  const data = { email: "", password: "" };
  const [inputData, setinputData] = useState(data);

  const submit = (e) => {
    e.preventDefault();

    var patten = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (inputData.email.match(patten)) {
      axios.post(" http://localhost:3000/Login", inputData).then((r) => {
        document.getElementById("Email").value = "";
        document.getElementById("password").value = "";
      });
    } else {
      alert("first user Login");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form bg bg-dark " onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-white ">Sign In</h3>

          <div className="form-group mt-3">
            <label className="text-white">Email address</label>
            <input
              value={inputData.email}
              onChange={(e) =>
                setinputData({ ...inputData, email: e.target.value })
              }
              id="Email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label className="text-white">Password</label>
            <input
              value={inputData.password}
              onChange={(e) =>
                setinputData({ ...inputData, password: e.target.value })
              }
              id="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogineP;
