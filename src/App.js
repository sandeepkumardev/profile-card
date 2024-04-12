import React, { useState } from "react";
import ProfileForm from "./components/Profile/ProfileForm";
import UserCard from "./components/Profile/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <ProfileForm users={users} setUsers={setUsers} />
      <hr />
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default App;
