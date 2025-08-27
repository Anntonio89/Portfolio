import {useState, useEffect, useRef} from "react";
import Skills from "../components/Skills";

const About=() => {
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

  return(
    <>
        <section
            id="about"
            style={{
            //minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
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
                maxWidth: "800px",
                borderTop: "5px solid #35dc72",
                borderLeft: "5px solid #35dc72",
                boxShadow: "0 0 15px rgba(53, 220,114, 0.5)",
                transform:skillsVisible ? "translateY(0)" : "translateY(-20px)",
                opacity: skillsVisible ? 1 : 0,
                transition: "all 0.8s ease-out",
            }}
            >  
            <h1 style={{
                color: "#35dc72",
                fontStyle: "italic",
                fontSize: "3rem",
                }}>
                Sobre mí                
            </h1>  
            <p style={{ 
                fontSize: "20px", 
                textAlign: "left",
                fontFamily:'Digital-7, system-ui, Avenir, Helvetica, Arial, sans-serif' 
                }}>
            Soy Antonio Martínez Oliver<br/>Desarrollador Web Junior
          </p>
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
        > 
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "2rem",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <h1 style={{
              color: "#35dc72",
              fontStyle: "italic",
              fontSize: "2rem",
            }}>Contáctame
          </h1>
          <p><span style={{textDecoration: "underline"}}>Email:</span> antonio.martinez.oliver@outlook.es</p>
          <p><span style={{textDecoration: "underline"}}>Teléfono:</span> +34 649497680</p>
        </div>
    </section>
    </>
  );
};

export default About;