import { useState, useContext } from "react"
import { CartContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

import "./Checkout.css" 

const Checkout = () => {
    const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")
    const [telefono, setTelefono] = useState ("")
    const [email, setEmail] = useState ("")
    const [emailConf, setEmailConf] = useState ("")
    const [error, setError] = useState ("")
    const [orderId, setOrderId] = useState ("")

    const { cart,clearCart, total } = useContext(CartContext)

    const formHandler = (event) => {

      event.preventDefault()

      if(!nombre || !apellido || !telefono || !email || !emailConf) {
        setError("Por favor completa todos los campos");
        return;
      }

      if(email !== emailConf){
        setError("El email no coincide");
        return;
      }

      const order= {
        items: cart.map(product => ({
          id: product.item.id,
          name: product.item.name,
          quantity: product.quantity
        })),
        total: total, 
        date: new Date(),
        nombre, 
        apellido,
        telefono,
        email
      }

      addDoc(collection(db, "ordenes"), order)
        .then(docRef => {
          setOrderId(docRef.id);
          clearCart();
        })
        .catch(error => {
          console.log("Error");
        })
    }
    
  return (

    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={formHandler}>
        {
          cart.map(product => (
            <div key={product.item.id} className="itemsCheckout" >
              <p>{product.item.name} x {product.quantity} </p>
              <p>${(product.item.price * product.quantity)} </p>
              
            </div>
          ))
          
        }
        <hr/>

        <h4>Datos personales</h4>

        <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input type="text"  id="apellido" value={apellido} onChange={(e)=> setApellido(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Telefono</label>
        <input type="text"  id="telefono" value={telefono} onChange={(e)=> setTelefono(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email"  id="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="emailConf">Confirmar email</label>
        <input type="email"  id="emailConf" value={emailConf} onChange={(e)=> setEmailConf(e.target.value)}></input>
      </div>

      {
        error && <p style={{color:"red"}}>{error}</p>
      }

      <button type="submit" className="finalizarCompra">Finalizar compra</button>

      </form>

      {
        orderId && (
          <strong>Gracias por tu compra! Tu número de orden es: {orderId}</strong>
        )
      }
    </div>
  )
}

export default Checkout