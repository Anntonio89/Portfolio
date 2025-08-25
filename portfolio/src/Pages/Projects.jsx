import { useRef, useEffect, useState } from "react";

function Projects() {
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      if (projectsRef.current) {
        const top = projectsRef.current.getBoundingClientRect().top;
        if (top < windowHeight * 0.8) {
          setProjectsVisible(true);
        } else {
          setProjectsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ejecutar al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={projectsRef}
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundImage: `url("/fotos/fondo.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        transform: projectsVisible ? "translateY(0)" : "translateY(100px)",
        opacity: projectsVisible ? 1 : 0,
        transition: "all 0.8s ease-out",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#35dc72",
        }}
      >
        Proyectos
      </h1>

      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "600px",
        }}
      >
        <a 
            href="https://proyecto-daw-tau.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: "none" }}
            >
            <img
                src="/fotos/gym-project.jpg"
                alt="Proyecto Gimnasio"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    width: "50%",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    transition: "transform 0.3s ease-in-out",
                    transform: hovered ? "scale(0.95)" : "scale(1)",
                }}
            />
            <h5
                style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontStyle:"italic",
                    fontWeight: "bold",
                    color: "#35dc72",
                }}
            >
                GESTIÓN DE GIMNASIO
            </h5>
            </a>

      </div>
    </div>
  );
}

export default Projects;
