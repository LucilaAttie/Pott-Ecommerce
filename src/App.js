import logo from './logo.svg';
import './App.css';
import './index.css';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import Navbar from "./components/Navbar/index";
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
    
    

  )
}

export default App;
