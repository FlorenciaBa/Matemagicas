//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Layout from './componentes/Layout';
import RutaNoEncontrada from './componentes/RutaNoEncontrada';
import Headerr from './componentes/Headerr';
import 'bootstrap';
import Videos from './componentes/Videos';
import Login from './componentes/Login';
import Primos from './componentes/Primos';
import Division from './componentes/Division';
import Factor from './componentes/Factor';
import Figuras from './componentes/Figuras';
import CRUDusuarios from './componentes/CRUDusuarios';
import InicioA from './componentes/InicioA';

//import CRUDusuario from './componentes/CRUDusuarios';
//import CRUDrol from './componentes/CRUDroles';

function App() {
  const active = {
    color: 'red',
}

const disactive = {
    default: {
        color: "#eee"
    },
    Hovered: {
        color: 'red'
    }

}
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element ={<Inicio/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/Primos' element={<Primos/>}/>
        <Route path='/Division' element={<Division/>}/>
        <Route path='/Factor' element={<Factor/>}/>
        <Route path='/Figuras' element={<Figuras/>}/>
        <Route path='/CRUDusuarios' element={<CRUDusuarios/>}/>
        <Route path='/Videos' element={<Videos/>}/>
        <Route path='/InicioA' element={<InicioA/>}/>

        <Route path='*' element={<RutaNoEncontrada/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
