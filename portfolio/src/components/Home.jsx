import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  const links = [
    { name: "CONTACTO", to: "/contacto" },
    { name: "SOBRE MI", to: "/about" },
    { name: "PROYECTOS", to: "/proyectos" },
  ];

  useEffect(() => {
    const time = setTimeout( () => {
      setVisible(true);
      },100);
      return () => clearTimeout(time);     
    },[]);

  return (
    <>    
    <section
      id="home"
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        backgroundImage: `url("/fotos/fondo.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        
      }}
    >        
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "2rem",
          borderRadius: "10px",
          width: "100%",
          borderTop: "5px solid #35dc72",
          borderLeft: "5px solid #35dc72",
          boxShadow: "0 0 15px rgba(53, 220,114, 0.5)",
          transform:visible ? "translateY(0)" : "translateY(-20px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease-out",
        }}
      >    <h1 style={{
              color: "#35dc72",
              fontStyle: "italic",
              fontSize: "3rem",          
              }}>
            Bienvenido a mi pagina personal
        </h1>       
        <p style={{ 
                fontSize: "20px", 
                textAlign: "left",
                fontFamily:'Digital-7, system-ui, Avenir, Helvetica, Arial, sans-serif' 
                }}>
            Soy Antonio Martínez Oliver<br/>Desarrollador Web Junior
          </p>
        <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              gap: "3rem", 
              marginTop: "1rem" 
          }}>
          <div style={{
              textAlign: "left"}}>
            <img
              src="/fotos/perfil.jpg"
              alt="Perfil"
              style={{ 
                width: "200px", 
                borderRadius: "10%",
                transform: visible ? "scale(1)" : "scale(0.8)",
                transition: "transform 0.5s ease-out"
              }}
            />
          </div>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "flex-start",
              margin: "2rem",
              fontSize: "1.5rem",
              fontFamily:'Digital-7, system-ui, Avenir, Helvetica, Arial, sans-serif',
              
            }}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                style={{
                  color: hovered === index ? "#35dc72" : "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: hovered === index ? "1.1rem" : "1rem",
                  transition: "color 0.3s, font-size 0.3s",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>   
    </>
  );
};

export default Home;
