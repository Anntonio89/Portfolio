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
        <div className={`row-flex ${visible ? "fade-in":""}`}> 
          <div className="intro">             
            <h1 style={{
                color: "#35dc72",
                fontStyle: "italic",
                fontSize: "3rem",          
              }}>
              Bienvenido a mi pagina personal
            </h1>       
            <p style={{ 
                  fontSize: "20px", 
                  textAlign: "center",
                  fontFamily:'Digital-7, system-ui, Avenir, Helvetica, Arial, sans-serif' 
                }}>
                Soy Antonio Martínez Oliver<br/>Desarrollador Web Junior
              </p>
            </div>
            <nav className="nav-box">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  style={{
                    color: hovered === index ? "#35dc72" : "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: hovered === index ? "1.4rem" : "1.5rem",
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
      </section>   
    </>
  );
};

export default Home;
