import './ContenedorDeProductos.css'
import Contador from './Contador'

const ContenedorDeProductos = ({saludar})=>{
    return(
        <div className="saludo__titulo">
            <h2>{saludar}</h2>
            <div>
                <Contador/>
            </div>
        </div>
    )
}

export default ContenedorDeProductos;