import React, { useState } from 'react'
import './LoginRegister.css'
import user_icon from '../Assets/usuario.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/contraseña.png'
import logo from '../Assets/Logo.png'

export const LoginRegister = () => {

    const[action,setAction] = useState("Registrar");

  return (
    <div className="outer-container">
        <div className="logo-container">
            <img src={logo} alt="" className='logo'/>
        </div>
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Iniciar Sesión"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Nombre'/>
            </div>}

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Correo electrónico'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Contraseña'/>
            </div>
            {action==="Registrar"?<div></div>:<div className="forgot-password"><strong>¿Perdiste tu contraseña?</strong> <span>Presiona aquí</span></div>}
            <div className="submit-container">
                <div className={action==="Iniciar Sesión"?"submit active":"submit"} onClick={()=>{setAction("Registrar")}}>Registrar</div>
                <div className={action==="Registrar"?"submit active":"submit"}onClick={()=>{setAction("Iniciar Sesión")}}>Iniciar Sesión</div>
            </div>
        </div>
    </div>
    </div>
  )
}
