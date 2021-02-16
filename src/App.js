import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import  {BrowserRouter, Switch, Link, Route} from 'react-router-dom';


import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavbarComponent from './components/NavBar';

function App() {
  return (
   <>

<NavbarComponent />

<BrowserRouter>
    <Switch>
      <Route  exact path="/">
          <ItemListContainer greeting={"Agregar al Carrito"}/>
      </Route>

      

      <Route  exact path="/product/:id">
          <ItemDetailContainer/>
      </Route>

      <Route  exact path="/contacto">
      <div className="row"> 
          <ItemListContainer greeting={"Estoy en Contacto"}/>
          <ItemListContainer greeting={"Estoy en Contactoasd"}/>
          <ItemListContainer greeting={"Estoy en Contactoasd"}/>
          <ItemListContainer greeting={"Estoy en Contactoasd"}/>
          <ItemListContainer greeting={"Estoy en Contactoasd"}/>
          <ItemListContainer greeting={"Estoy en Contactoasd"}/>
          </div>
      </Route>
    </Switch> 
  </BrowserRouter>


   
   
   </>
  );
}

export default App;
