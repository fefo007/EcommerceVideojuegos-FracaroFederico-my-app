
import './App.css';
import NavBar from './componentes/NavBar';
import ContenedorDeProductos from './componentes/ContenedorDeProductos'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <ContenedorDeProductos saludar='Bienvenido a Gamer House' />
            </header>
        </div>
    );
}

export default App;




