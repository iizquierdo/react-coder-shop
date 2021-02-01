import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './containers/ItemListContainer';
import NavbarComponent from './components/NavBar';

function App() {
  return (
   <>
   <NavbarComponent />
   <ItemListContainer greeting={"Agregar al Carrito"}/>
   </>
  );
}

export default App;
