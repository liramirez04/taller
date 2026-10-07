"use client";

import { useState } from "react";

export default function ProgressBar() {
  const [porcentaje, setPorcentaje] = useState<number>(0);

  const cambiar = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = Number(e.target.value);
    if (isNaN(valor)) valor = 0;
    if (valor < 0) valor = 0;
    if (valor > 100) valor = 100;
    setPorcentaje(valor);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Progress bar</h1>
      <div
        style={{
          width: "400",
          margin: "0 auto",
          height: 30,
          border: "1px solid black",
          borderRadius: 6,
          overflow: "hidden",
          
        }}
      >
        <div
          style={{
            width: `${porcentaje}%`,
            height: "100%",
            backgroundColor: "#ff0000",
            color: "#ffffff"
          }}
          >
            {porcentaje > 0 &&  `${porcentaje}%`}
        </div>
      </div>
      <div style={{ marginTop: 10, textAlign: "center" }}>
        <label>Input Percentage: </label>
        <input
          type="number"
          min={0}
          max={100}
          value={porcentaje}
          onChange={cambiar}
          style={{ padding: "6px 10px", marginBottom: 10, width: 100 }}/> 
      </div>
    </div>
  );
}