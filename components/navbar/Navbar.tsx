export default function Navbar() {
  return (
    <div>
      {[false, true].map((invertida) => {
        const direccion = invertida ? "row-reverse" : "row";
        return(
          <nav key={String(invertida)} 
          style={{ display: "flex", flexDirection: direccion,
           alignItems: "center", padding: "10px 20px", 
           margin: "10px 0", backgroundColor:  "#333d48",
           fontFamily: "sans-serif" }}>
          <span style={{ marginRight: 20, color: "#ffffff" }}>Navbar</span>
          <ul style={{ display: "flex", flexDirection: direccion, listStyle: "none", gap: 18, margin: 0, padding: 0, color: "#9a9da0" }}>
            <li style = {{color:"#ffffff"}}>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
          </ul>
          <div style={{ display: "flex", gap: 8, flexDirection: direccion, marginLeft: invertida ? 0 : "auto", marginRight: invertida ? "auto" : 0 }}>
            <input type="text" placeholder="Search" style={{ padding: "6px 10px" }} />
            <button type="button" style={{ padding: "6px 12px", color: "#17a2b8", backgroundColor: "transparent", borderRadius: 3, border: "1px solid #17a2b8" }}>
              Search
            </button>
          </div>
          </nav>
        );
      })}
    </div>
  );
}