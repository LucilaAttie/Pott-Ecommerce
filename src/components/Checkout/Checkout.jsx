import { useState, useContext } from "react"
import { CartContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")
    const [telefono, setTelefono] = useState ("")
    const [email, setEmail] = useState ("")
    const [emailConf, setEmailConf] = useState ("")
    const [error, setError] = useState ("")
    const [orderId, setOrderId] = useState ("")

    const { cart,clearCart, total, totalQuantity } = useContext(CartContext)

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

    <div>
      <h2>Checkout</h2>
      <form onSubmit={formHandler}>
        {
          cart.map(product => (
            <div key={product.item.id} >
              <p>{product.item.name} x {product.quantity} </p>
              <p>{product.item.price} </p>
              <hr/>
            </div>
          ))
          
        }
        <hr/>

        <div className="form-group">
        <label htmlFor="">Nombre</label>
        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="">Apellido</label>
        <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="">Telefono</label>
        <input type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
      </div>

      <div className="form-group">
        <label htmlFor="">Confirmar email</label>
        <input type="email" value={emailConf} onChange={(e)=> setEmailConf(e.target.value)}></input>
      </div>

      {
        error && <p style={{color:"red"}}>{error}</p>
      }

      <button type="submit">Finalizar compra</button>

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