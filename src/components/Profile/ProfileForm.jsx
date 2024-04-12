import React, { useState } from "react";
import "./ProfileForm.css";

const ProfileForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUsers([...props.users, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div className="form-container">
      <center>
        <form>
          <h2>Enter your data!</h2>
          <input type="text" placeholder="Enter your name" value={name} onChange={handleName} />
          <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </center>
    </div>
  );
};

export default ProfileForm;
