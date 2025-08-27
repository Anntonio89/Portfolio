// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Powered by Antonio Martínez Oliver<br/>© 2025 Todos los derechos reservados</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundImage: `url("/fotos/fondo.jpg")`, 
    backgroundSize: "cover",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Footer;
