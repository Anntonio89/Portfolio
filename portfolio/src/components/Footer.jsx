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
    backgroundColor: "#333",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
};

export default Footer;
