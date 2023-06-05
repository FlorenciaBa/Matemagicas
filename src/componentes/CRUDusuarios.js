import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CRUDusuarios.css';
import Table from 'react-bootstrap/Table';
import { Modal } from 'react-bootstrap';
import { ModalBody } from 'react-bootstrap';
import { ModalFooter } from 'react-bootstrap';
import { ModalHeader } from 'react-bootstrap';
import agregar from './images/agregar.png';
import borrar from './images/borrar.png';
import editar from './images/editarr.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const CRUDusuarios = () => {
    const active = {
        color: "#F29A86",
    }

    const disactive = {
        color: "#2B2D47"
    }

    const [nombre, setNombre] = useState();
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [rol_id, setRol] = useState();
    const [estatus, setEstatus] = useState("");
    const [modalEditar, setEditar] = useState(false);
    const [modalEliminar, setEliminar] = useState(false);

    //Registrar usuario
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/usuario/crear', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    correo: correo,
                    contrasenia: contrasenia,
                    estatus: true,
                    fechaRegistro: "2022-11-10",
                    fechaVigencia: "2023-10-10",
                    rol_id: rol_id
                }),
            });
            if (res.status === 200) {
                console.log(res.status);
                console.log(nombre);
                console.log(correo);
                console.log(contrasenia);
                console.log(estatus);
                setNombre("");
                setCorreo("");
                setContrasenia("");
                setRol("");
                setEstatus("");
                setRol("");
            } else {
                alert("ocurrió un error")
                console.log("ocurrio un error")
            }
        } catch (err) {
            console.log(err);
        }
    };

    //objeto para almacenar los datos al editar
    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
        nombre: '',
        correo: '',
        contrasenia: '',
        rol_id: ''
    });

    const seleccionarConsola = (consola, caso) => {
        setConsolaSeleccionada(consola);
        setNombre(consola.nombre);
        setCorreo(consola.correo);
        setContrasenia(consola.contrasenia);
        setRol(consola.rol_id);
        setEstatus(consola.estatus);

        if (caso === 'Editar') {
            setEditar(true);
        } else if (caso === 'Eliminar') {
            setEliminar(true);
        }
    };

    //Editar un usuario
    let handleEdit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/usuario/' + consolaSeleccionada.id, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    correo: correo,
                    rol_id: rol_id
                }),
            });
            if (res.status === 200) {
                console.log(res.status);
                console.log(nombre);
                console.log(correo);
                console.log(contrasenia);
                setNombre("");
                setCorreo("");
                setContrasenia("");
                setRol("");
                alert("Actualizado con éxito")
            } else {
                alert("ocurrio un error al intentar actualizar el ID: " + consolaSeleccionada.id)
                console.log(nombre);
                console.log("ID: " + consolaSeleccionada.id)
            }
        } catch (err) {
            console.log(err);
        }
    };

    const [usuario, setUsuario] = React.useState([])

    React.useEffect(() => {
        obtenerDatos();
    })

    //Listar los usuarios 
    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/usuario/listar');
        const usuarios = await data.json();
        setUsuario(usuarios);
    }

    const [modalAgregar, setAgregar] = useState(false);

    //insertar, agregar el usuario
    const bodyInsertar = (
        <section>
            <div className={'main'}>
                <Form method="post" onSubmit={handleSubmit}>
                <ModalHeader><h3>Agregar usuario</h3></ModalHeader>
                    <ModalBody>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nombre completo:</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" required onChange={e => setNombre(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control type="email" placeholder="Correo electr&oacute;nico" required onChange={e => setCorreo(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" required onChange={e => setContrasenia(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Rol Id</Form.Label>
                            <Form.Select aria-label="Default select example" className="selection" onChange={e => setRol(e.target.value)}>
                                <option>1</option>
                                <option>2</option>
                                <option>4</option>
                            </Form.Select>
                        </Form.Group>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="success" type="submit" className="btnAgregar" onClick={() => setAgregar(false)}>Agregar</Button>
                        <Button variant="danger" onClick={() => setAgregar(false)}>Cancelar</Button>
                    </ModalFooter>
                </Form>
            </div>
        </section>
    );

    //Editar usuario
    const bodyEditar = (
        <section>
            <div className={'main'}>
                <Form method="put" onSubmit={handleEdit}>
                <ModalHeader><h3>Editar usuario</h3></ModalHeader>
                    <ModalBody>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nombre completo:</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" required onChange={e => setNombre(e.target.value)} defaultValue={consolaSeleccionada && consolaSeleccionada.nombre} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control type="email" placeholder="Correo electr&oacute;nico" required onChange={e => setCorreo(e.target.value)} defaultValue={consolaSeleccionada && consolaSeleccionada.correo} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" required onChange={e => setContrasenia(e.target.value)} defaultValue={consolaSeleccionada && consolaSeleccionada.contrasenia} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Rol</Form.Label>
                            <Form.Select aria-label="Default select example" className="selection" onChange={e => setRol(e.target.value)} defaultValue={consolaSeleccionada && consolaSeleccionada.rol_id} >
                                <option>1</option>
                                <option>2</option>
                                <option>4</option>
                            </Form.Select>
                        </Form.Group>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="success" type="submit" className="btnAgregar" onClick={() => setEditar(false)}>Guardar</Button>
                        <Button variant="danger" onClick={() => setEditar(false)}>Cancelar</Button>
                    </ModalFooter>
                </Form>
            </div>
        </section>
    );

    //Eliminar usuario
    let handleDelete = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/usuario/' + consolaSeleccionada.id, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            if (res.status === 200) {
                console.log(res.status);
            } else {
                alert("ocurrio un error")
                console.log("ID " + consolaSeleccionada.id)
            }
        } catch (err) {
            console.log(err);
        }
    };

    //Mensaje para eliminar
    const bodyEliminar = (
        <div>
            <Form method="delete" onSubmit={handleDelete}>
                <ModalHeader>
                    <small id='mensaje'>Está apunto de eliminar el usuario <b id='nombre'>{consolaSeleccionada && consolaSeleccionada.nombre}</b></small>
                </ModalHeader>
                <ModalFooter>
                    <Button variant="danger" type="submit" className="btnAgregar" onClick={() => setEliminar(false)}>Eliminar</Button>
                    <Button variant="secondary" onClick={() => setEliminar(false)}>Cancelar</Button>
                </ModalFooter>
            </Form>
        </div>
    );


    return (
        <>
            <nav class="navbar navbar-dark bg-danger fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">FLORENCIA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-danger" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">FLORENCIA</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link active" aria-current="page">
                                        <NavLink to="/CRUDusuarios" style={({ isActive }) => isActive ? active : disactive}>USUARIOS</NavLink></a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link active" aria-current="page">
                                        <NavLink to="/CRUDroles" style={({ isActive }) => isActive ? active : disactive}>ROLES</NavLink></a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link active" aria-current="page">
                                        <NavLink to="/Inicio" style={({ isActive }) => isActive ? active : disactive}>CERRAR SESIÓN</NavLink></a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-danger">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <br></br>
                            <br></br><br></br>
                            <br></br><br></br>
                            <br></br><br></br>
                            <br></br><br></br>
                            <br></br><br></br>
                            <form class="d-flex mt-3" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-primary" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <br></br>
                <br></br>
                <br />  <br />
                <br />

                <div className="tabla">
                    <div className="bg-danger p-2 text-dark bg-opacity-10">
                        <div className="card-body">
                            <br />
                            <center>
                                <h3 className="card-title">CRUD de usuarios</h3>
                            </center>
                            <br />
                        </div>
                    </div>

                    <Table striped bordered hover variant="default">
                        <thead>
                            <tr>
                                <th><center>ID</center></th>
                                <th><center>Nombre completo</center></th>
                                <th><center>Correo</center></th>
                                <th><center>Contraseña</center></th>
                                <th><center>Rol</center></th>
                                <th><center>Acciones</center></th>
                            </tr>
                        </thead>
                        <tbody>{
                            usuario.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.fechaRegistro}</td>
                                    <td>{item.rol_id}</td>
                                    <td>
                                        <Button variant="success" onClick={() => seleccionarConsola(item, 'Editar')} ><img src={editar} /></Button>
                                        {' '}<Button variant="danger" onClick={() => seleccionarConsola(item, 'Eliminar')} ><img src={borrar} /></Button>
                                    </td>
                                </tr>))}
                        </tbody>
                    </Table>
                    <br></br>
                    <br></br>
                    <Button variant="warning" onClick={() => {
                        setAgregar(true)
                        console.log("mostrar");
                    }}>Agregar usuario</Button>
                </div>
            </section>

            <Modal
                show={modalAgregar}
                onHide={() => setAgregar(false)}
            >
                {bodyInsertar}
            </Modal>

            <Modal
                show={modalEditar}
                onHide={() => setEditar(false)}
            >
                {bodyEditar}
            </Modal>

            <Modal
                show={modalEliminar}
                onHide={() => setEliminar(false)}
            >
                {bodyEliminar}
            </Modal>

        </>

    );
}

export default CRUDusuarios;