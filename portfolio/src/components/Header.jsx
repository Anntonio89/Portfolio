import React, { useState } from "react";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"
import { Link } from "react-router-dom";

const Header = () => {
  const [hovered, setHovered] = useState(null);

  const links = [
    { icon:<FaGithub/>, href: "https://github.com/Anntonio89/Proyecto_DAW", external: true },
    { icon:<FaLinkedin/>, href: "https://www.linkedin.com/in/antonio-mart%C3%ADnez-oliver-673b37242/" , external:true},
    { icon:<FaEnvelope/>, to: "/contacto", external: false },
  ];

  return (
    <header style={{ 
              backgroundColor:"rgba(2, 2, 2, 0.9)",
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
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
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
