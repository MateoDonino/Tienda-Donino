import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import ConHijos from './components/ConHijos';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos"/> 
    </>
  );
}

export default App;
