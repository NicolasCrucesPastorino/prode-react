import logo from './logo.svg';
import './App.css';
import {useAuth} from './Hooks/UseAuth';
import { Mainroutes } from './Routes/Mainroutes';
import { Link } from 'react-router-dom';
import Authconsumer from './Hooks/UseAuth'
import { useFirestore } from './Hooks/useFirestore';
import { Navbar } from './Components/Navbar'

function App() {
  const {isSigned, userauth, signedout ,signin}=Authconsumer()
  const database = useFirestore()
  //database.createPartido('partido').then()
  database.getAllPartidos()
    .then(partidos => partidos.forEach(partido => console.log(partido)))
  return (
    <div >
      <Navbar></Navbar>
      <main>
        <Mainroutes></Mainroutes>
      </main>
    </div>
  );
}

export default App;
