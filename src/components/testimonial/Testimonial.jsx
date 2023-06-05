import React from "react";

export default function SimpleSlider() {
  const logoList = [
    "ikea", 
    "cae", 
    "interac", 
    "walmart",
    "tks" 
    // Add more logo filenames as needed
  ];

  return (
    <div className="logo-wrapper" style={{display: "flex", overflowX: "auto", justifyContent: "center"}}>
      {logoList.map((logo, i) => (
        <div key={i} style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", height: "200px", width: "200px", flex: "0 0 auto"}}>
          <img 
            src={`img/logos/${logo}.png`} 
            alt={`${logo} logo`} 
            style={{maxHeight: "100%", maxWidth: "100%"}}
          />
        </div>
      ))}
    </div>
  );
}
