import { useState, useEffect, useRef } from "react";
import Skills from "./Skills";

const Home = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      const windowHeight = window.innerHeight;

      //Animación de habilidades
      if (skillsRef.current){
        const topSkills = skillsRef.current.getBoundingClientRect().top;
        if (topSkills < windowHeight * 0.8) { // cuando el 80% de la sección está visible
            setSkillsVisible(true);
        }else {
          setSkillsVisible(false);
        }
      } 
        //Animación de contacto
        if(contactRef.current){
          const topContact = contactRef.current.getBoundingClientRect().top;
          if (topContact < windowHeight * 0.8) { // cuando el 80% de la sección está visible
              setContactVisible(true);
          }else {
            setContactVisible(false);
          }
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chequea al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <section
      id="home"
      style={{
        minHeight: "100vh",
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
        }}
      >            
        <video
            src="/videos/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              margin: "1rem 0",
              transform: skillsVisible ? "scale(1)" : "scale(0.8)",
              transition: "transform 0.5s ease-out",
              objectFit: "cover",
            }}
        />        
        <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1.5rem", 
              marginTop: "1rem" 
          }}>
          <img
            src="/fotos/perfil.jpg"
            alt="Perfil"
            style={{ 
              width: "200px", 
              borderRadius: "10%",
              transform: skillsVisible ? "scale(1)" : "scale(0.8)",
              transition: "transform 0.5s ease-out"
            }}
          />
          <p style={{ fontSize: "20px", textAlign: "left" }}>
            Soy Antonio Martínez Oliver<br/>Desarrollador Web Junior
          </p>
        </div>

        <div
          ref={skillsRef}
          style={{
            marginTop: "2rem",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1rem",
            borderRadius: "10px",
            transform: skillsVisible ? "translateX(0)" : "translateX(-100px)",
            opacity: skillsVisible ? 1 : 0,
            transition: "all 0.8s ease-out",
          }}
        >
          <h1>Habilidades</h1>
          <Skills />
        </div>
      </div>
      </section>

      <section
        ref={contactRef}
        style={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: `url("/fotos/fondo.jpg")`,
          padding: "2rem",
          transform: contactVisible ? "translateX(0)" : "translateX(100px)",
          opacity: contactVisible ? 1 : 0,
          transition: "all 0.8s ease-out",
        }}
        > <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "2rem",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <h1>Contáctame</h1>
          <p><span style={{textDecoration: "underline"}}>Email:</span> antonio.martinez.oliver@outlook.es</p>
          <p><span style={{textDecoration: "underline"}}>Teléfono:</span> +34 649497680</p>
        </div>
    </section>
    </>
  );
};

export default Home;
