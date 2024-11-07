import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../login/login.css';

const Login = () =>{
    return(
        <>
          <div className="conteinerLogin">
            <div className='iconoLogin'>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="title">
              <h2>Iniciar Sesión</h2>
              <p>Ingresa tus credenciales para acceder a tu cuenta</p>
            </div>
            <div>
              <div className="campos">
                <label htmlFor="">Correo Electrónico</label>
                <input type="text" name="" id="" placeholder="tu@ejemplo.com"/>
              </div>
              <br/>
              <div>
                <label htmlFor="">Contraseña</label>
                <input type="password" name="" id="" />
              </div>
            </div>
            <div >
              <button className="buttonLogin">Ingresar</button>
            </div>
          </div>
        </>
    )
}

export default Login;