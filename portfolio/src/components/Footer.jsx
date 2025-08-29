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
    backgroundColor:"rgba(2, 2, 2, 0.9)",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Footer;
