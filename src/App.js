import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title='Nuestros Servicios' />
    </div>
  );
}



export default App;


