import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/config";

const Form = () => {
    const [name, setName] = useState ("");
    const [lastname, setLastname] = useState ("");
    const [phone, setPhone] = useState ("");


    const formHandler = (event) => {
        event.preventDefault();

        addDoc(collection(db, "users"), {
            name: name,
            lastname: lastname,
            phone: phone
        })

        setName("");
        setLastname("");
        setPhone("");
    
    }

  return (
    <form onSubmit={formHandler}>
        <h2>formulario</h2>

        <label htmlFor="">nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>

        <label htmlFor="">apellido</label>
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}></input>

        <label htmlFor="">telefono</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} ></input>


        <button type="submit" >enviar</button>

    </form>
  )
}

export default Form