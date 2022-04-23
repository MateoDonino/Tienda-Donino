const Saludo = (props) => {
    return(
        <>
            <h1 className="text-2xl">Mi primer Componente</h1>
            <div className="text-2xl">Saludos {props.name}</div>
            <div className="text-2xl"> Tienes {props.age} años</div>
            <div></div>
        </>
    )
}

export default Saludo

//rafce
