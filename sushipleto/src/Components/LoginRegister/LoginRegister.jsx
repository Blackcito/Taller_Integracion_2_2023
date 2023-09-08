import React, { useState } from 'react'
import './LoginRegister.css'
import user_icon from '../Assets/usuario.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/contraseña.png'

export const LoginRegister = () => {

    const[action,setAction] = useState("Registrar");

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Conectar"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Nombre'/>
            </div>}

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Correo electrónico'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Tu contraseña'/>
            </div>
            {action==="Registrar"?<div></div>:<div className="forgot-password">¿Perdiste tu contraseña? <span>Presiona aquí</span></div>}
            <div className="submit-container">
                <div className={action==="Conectar"?"submit gray":"submit"} onClick={()=>{setAction("Registrar")}}>Registrar</div>
                <div className={action==="Registrar"?"submit gray":"submit"}onClick={()=>{setAction("Conectar")}}>Conectar</div>
            </div>
        </div>
    </div>
  )
}
