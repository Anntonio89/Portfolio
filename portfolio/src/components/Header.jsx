import React, { useState } from "react";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"
import { Link } from "react-router-dom";

const Header = () => {
  const [hovered, setHovered] = useState(null);

  const links = [
    { icon:<FaGithub/>, to: "/" },
    { icon:<FaLinkedin/>, to: "/" },
    { icon:<FaEnvelope/>, to: "/contacto" },
  ];

  return (
    <header style={{ 
              backgroundImage: `url("/fotos/fondo.jpg")`, 
              backgroundSize: "cover",
              padding: "0.5rem 1rem", 
              display: "flex",
              justifyContent:"flex-end",
              gap: "2rem", 
      }}>
      <nav style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "2rem" 
      }}>
        {links.map((link, index) => 
        link.external ? (
          <a
            key={index}
            to={link.to}
            target="_blank"
            style={{
              color: hovered === index ? "#35dc72" : "white",
              fontSize: "1.5rem",
              textDecoration: "none",
              transition: "color 0.3s, text-decoration 0.3s",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.icon}
          </a>
        ):(
          <Link
            key={index}
            to={link.to}
            style={{
              color: hovered === index ? "#35dc72" : "white",
              fontSize: "1.5rem",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "color 0.3s, text-decoration 0.3s",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.icon}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
