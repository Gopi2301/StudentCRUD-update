import { useState } from "react";


export function StudentForm({getUser}) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
 

  return (
    <div>
      <input
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        type="text"
        id="name"
        name="name"
        value={name}
      />
      <input
        onChange={(event) => setUserName(event.target.value)}
        placeholder="User Name"
        type="text"
        id="username"
        name="username"
        value={username}
      />
      <button onClick={() => addUser(name, username)}>Add Student</button>
    </div>
  );
}
async function addUser(name, username) {
  const newMovie = {
    name: name,
    username: username,
  };
  
  await fetch("https://63d814e75dbd72324432fa01.mockapi.io/students", {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: { "Content-Type": "application/json" },
    
  })
}
