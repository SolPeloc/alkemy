/* eslint-disable no-useless-escape */

import axios from "axios";
import swalAlert from '@sweetalert/with-react'
function Login(){


    const submitHandler = e =>{
            e.preventDefault();
                const email = e.target.email.value;
                const password = e.target.password.value;
                const regexEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                
                
                if(email === "" || password === ""){
                    swalAlert(<h2>los campos no pueden estar vacios</h2>)
                        return;
                    }
                    
                if(email !== "" && !regexEmail.test(email)) {
                    swalAlert(<h2>debes escribir un correo electrónico válido</h2>)
                    
                    return;
                }
                if(email !== "challenge@alkemy.org" || password !=="react"){
                    swalAlert(<h2>las credenciales son inválidas</h2>)
                    
                    return;
                }
                swalAlert(<h2>bien, ingresaste correctamente!!</h2>)
                console.log("bien, estamos listos para comenzar")
                axios.post("http://challenge-react.alkemy.org",{email,password})
                 .then(res =>{
                    console.log(res)
                 })
        }


 return (
   <> 
        <h2>Formulario</h2>
        <form onSubmit={submitHandler}>
            <label>
            <span>Correo electrónico:</span><br/> 
            <input type="text" name="email"/>
            </label>
            <br/> 
            <label> 
            <span>Contraseña:</span><br/> 
            <input type="password" name="password"autoComplete="true" />   {/* agregue autoComplete */}
            </label>
            <br/> 
            <button type="submit">Ingresar</button>
            <button>btntn</button>
        </form>

 </>)


}




export default Login;