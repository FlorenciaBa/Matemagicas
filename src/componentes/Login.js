import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Login.css';
import Footer from './Footer';
import Header from './Headerr';
import { NavLink } from 'react-router-dom';
import $ from 'jquery'; // Importa jQuery
import './Footer.css';
import InicioA from './InicioA';



const Login = () => {
  const navigate = useNavigate();
  let rol = "";

  // Envio de formulario
  const [mail, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [estatus, setEstatus] = useState("");
  const [nombre, setNombre] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http://localhost:9595/administrador/login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          correo: mail,
          contrasenia: password,
        }),
      });
      if (res.status === 200) {
        console.log(res.status);
        console.log(mail);
        console.log(password);
        navigate('/CRUDusuarios');
      } else if (res.status === 201) {
        console.log(res.status);
        console.log(mail);
        console.log(password);
        navigate('/InicioA');
      } else {
        alert("Usuario no identificado");
        console.log("ocurrio un error");
      }
    } catch (err) {
      console.log(err);
    }

  };


    // Envio de formulario


    let handleSubmitt = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/registrar', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    correo: mail,
                    contrasenia: password,
                    estatus: true,
                    fechaRegistro: "2022-11-10",
                    fechaVigencia: "2023-10-10",
                    rol_id: 2
                }),
            });
            if (res.status === 200) {
                //setCorreo("");
                //setContrasenia("");
                console.log(res.status);
                alert("Usuario creado");
              } else {
                alert("Ocurrió un error")
                console.log("ocurrio un error")
            }
        } catch (err) {
            console.log(err);
        }
    };

  useEffect(() => {
    var $loginMsg = $('.loginMsg'),
      $login = $('.login'),
      $signupMsg = $('.signupMsg'),
      $signup = $('.signup'),
      $frontbox = $('.frontbox');

    $('#switch1').on('click', function () {
      $loginMsg.toggleClass("visibility");
      $frontbox.addClass("moving");
      $signupMsg.toggleClass("visibility");

      $signup.toggleClass('hide');
      $login.toggleClass('hide');
    });

    $('#switch2').on('click', function () {
      $loginMsg.toggleClass("visibility");
      $frontbox.removeClass("moving");
      $signupMsg.toggleClass("visibility");

      $signup.toggleClass('hide');
      $login.toggleClass('hide');
    });

    setTimeout(function () {
      $('#switch1').click();
    }, 1000);

    setTimeout(function () {
      $('#switch2').click();
    }, 3000);
  }, []); // Agrega [] para que se ejecute solo una vez al montar el componente

  return (
    <>
      <Header></Header>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="login.css" />
      </head>
      <body>
        <br></br>
        <div class="container">
          <br></br>

          <div class="backbox">
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="loginMsg">
              <div class="textcontent">
                <p><h1>¿No tienes cuenta?</h1></p>
                <button id="switch1">Registrarme</button>
              </div>
            </div>
            <div class="signupMsg visibility">
              <div class="textcontent">
                <p class="">¿Ya tienes una cuenta?</p>
                <p>Ingresa para mejor experiencia</p>
                <button id="switch2">Iniciar sesión</button>
              </div>
            </div>
          </div>

          <div class="frontbox">
            <div class="login">
              <h2>LOG IN</h2>
              <form method="post" onSubmit={handleSubmit}>

                <div class="inputbox">
                  <input type="email" name="email" placeholder="Correo electr&oacute;nico" required="required"
                    onChange={e => setCorreo(e.target.value)} />
                  <input type="password" name="password" placeholder="Contraseña" required="required"
                    onChange={e => setPassword(e.target.value)} />

                </div>
                <p><a> <NavLink to="/registro">¿Olvidaste tu contraseña?</NavLink></a></p>
                <button type="submit">LOG IN</button>
              </form>
            </div>
            <div class="signup hide">
              <h2>SIGN UP</h2>
              <form method="post" onSubmit={handleSubmitt}>
                <div class="inputbox">
                  <div className="form-floating mb-3">
                    <div className="form-floating mb-0">
                      <input className="controls"
                        tipo="text"
                        placeholder="Nombre"
                        name="nombre"
                        id="nombre"
                        required="required"
                        onChange={e => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="form-floating mb-0">
                      <input className="controls"
                        tipo="email"
                        placeholder="Correo electr&oacute;nico"
                        name="correo"
                        id="correo"
                        required="required"
                        onChange={e => setCorreo(e.target.value)}
                      />
                    </div>
                    <div className="form-floating mb-0">
                      <input class="controls" type="password" name="contrasenia" placeholder="Contraseña" required="required"
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>                  </div>
                  <button type="submit" className="btn btn-dark">Crear cuenta</button>
                </div>
              </form>

            </div>

          </div>

        </div>

      </body>

    </>
  );
};

export default Login;
