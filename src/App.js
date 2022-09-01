import './App.css';
import { Mainroutes } from './Routes/Mainroutes';
import { Navbar } from './Components/Navbar'

function App() {
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
