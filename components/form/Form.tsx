"use client";

import { use, useState } from "react";

export default function Formulario() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "" || fullName === "" || age === "") {
      setError("Se tienen que llenar todos los campos");
      setEnviado(false);
      return;
    }

    setError("");
    const datos = {username, fullName, age:Number(age)};
    alert(JSON.stringify(datos));
    setEnviado(true);
  };

  return (
    <div>
      <form onSubmit={enviar}>
        <div style={{ marginBottom: "20px" }}>
          <label style = {{display: "block"}}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style = {{border: "1px solid black", padding: "4px 6px"}}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style = {{display: "block"}}>FullName</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style = {{border: "1px solid black", padding: "4px 6px"}}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style = {{display: "block"}}>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style = {{border: "1px solid black", padding: "4px 6px"}}
          />
        </div>
        <button type="submit" style = {{border: "1px solid black", padding: "4px 6px"}}>Submit</button>
      </form>
      {error && <p style={{ color: "#ff0000" }}>{error}</p>}
      {enviado && (
        <div style={{ marginTop: "30px" }}>
          <h1>Request Sent to DB with below request data</h1>
          <ul>
            <li>UserName: {username.toUpperCase()}</li>
            <li>FullName: {fullName.toUpperCase()}</li>
            <li>Age: {age}</li>
          </ul>
        </div>
      )}
      
    </div>
  );
}