import './ContenedorDeProductos.css'


const ContenedorDeProductos = ({saludar})=>{
    return(
        <div className="saludo__titulo">
            <h2>{saludar}</h2>
        </div>
    )
}

export default ContenedorDeProductos;