import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function Contact() {
    const [email,setEmail]=useState('')
    const [mensaje, setMensaje]=useState('')
    const [aceptaPoliticas, setAceptaPoliticas]=useState(false)
    const navigate=useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!aceptaPoliticas) {
            Swal.fire({
              title: 'Aviso',
              text: 'Debes aceptar las políticas de privacidad',
              icon: 'warning',
              background: 'black',
              confirmButtonColor: '#35dc72ff'
            })
            return
          }
      
          Swal.fire({
            title: 'Enviado',
            text: 'Tu mensaje ha sido enviado con éxito',
            icon: 'success',
            background: 'black',
            confirmButtonColor: '#35dc72ff'
          })
      
          setEmail('')
          setMensaje('')
          setAceptaPoliticas(false)
        }
      const styles = {
          container: {
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url("/fotos/fondo.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "2rem",
            color: "white",
          },
          formWrapper: {
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "2rem",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "600px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          },
          titulo: {
            marginBottom: "1.5rem",
            fontSize: "2rem",
            textAlign: "center",
            color: "#35dc72",
          },
          label: {
            display: "block",
            margin: "0.8rem 0 0.3rem",
            fontWeight: "bold",
          },
          input: {
            width: "100%",
            padding: "0.7rem",
            border: "none",
            borderRadius: "6px",
            marginBottom: "1rem",
            fontSize: "1rem",
          },
          textarea: {
            width: "100%",
            padding: "0.7rem",
            border: "none",
            borderRadius: "6px",
            marginBottom: "1rem",
            fontSize: "1rem",
          },
          politicas: {
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          },
          boton: {
            backgroundColor: "#35dc72",
            color: "black",
            fontWeight: "bold",
            border: "none",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: "100%",
          }
        }
        return (
          <div style={styles.container}>
            <div style={styles.formWrapper}>
              <h1 style={styles.titulo}>Formulario de Contacto</h1>
              <form onSubmit={handleSubmit}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
                <label style={styles.label}>Mensaje</label>
                <textarea
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  required
                  rows={5}
                  style={styles.textarea}
                />
                <div style={styles.politicas}>
                  <input
                    type="checkbox"
                    checked={aceptaPoliticas}
                    onChange={e => setAceptaPoliticas(e.target.checked)}
                  />
                  <label style={{paddingLeft:'10px'}}>Acepto las políticas de privacidad</label>
                </div>
                <button type="submit" 
                        style={styles.boton}
                          onMouseOver={(e) => e.target.style.backgroundColor = "#28b35a"}
                          onMouseOut={(e) => e.target.style.backgroundColor = "#35dc72"}
                >ENVIAR
                </button>
              </form>
            </div>    
            
          </div>
        )
      
}

export default Contact