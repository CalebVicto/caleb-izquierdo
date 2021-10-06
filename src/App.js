import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/nav';
import Home from './page/home/home';
import './app.css'
import NuestraHistoria from './page/nuestra-historia/nuestra-historia';
import Asistencia from './page/asistencia/asistencia';
import Confirmado from './page/confirmado/confirmado';
import Regalos from './page/regalos/regalos';
import Ubicacion from './page/como-llegar/como-llegar';

const App = () => {


  useEffect(() => {
    console.log('Cargo la página')
  }, [])

  return (
    <Router>

      <NavBar />

      <Switch>

        <Route path="/confirmado">
          <Confirmado />
        </Route>

        <Route path="/como-llegar">
          <Ubicacion />
        </Route>

        <Route path="/regalos">
          <Regalos />
        </Route>

        <Route path="/nuestra-historia">
          <NuestraHistoria />
        </Route>

        <Route path="/confirmar-asistencia">
          <Asistencia />
        </Route>


        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
