import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hovered, setHovered] = useState(null);

  const links = [
    { name: "HOME", to: "/" },
    { name: "CONTACTO", to: "/contacto" },
    { name: "SOBRE MI", to: "#sobre-mi" },
    { name: "PROYECTOS", to: "/proyectos" },
  ];

  return (
    <header style={{ backgroundColor: "#333", padding: "1rem", textAlign: "center" }}>
       <h1 style={{
              color: "#35dc72"          
              }}>
            Bienvenido a mi pagina personal
        </h1>
      <nav style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        {links.map((link, index) => 
        link.external ? (
          <a
            key={index}
            to={link.to}
            target="_blank"
            style={{
              color: hovered === index ? "#35dc72" : "white",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "color 0.3s, text-decoration 0.3s",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.name}
          </a>
        ):(
          <Link
            key={index}
            to={link.to}
            style={{
              color: hovered === index ? "#35dc72" : "white",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "color 0.3s, text-decoration 0.3s",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
