import { useEffect, useState } from "react"

const Contador = () => {

    const [suma, setSuma] = useState(0)

    useEffect( ()=>{
        console.log("Efecto en cambio suma");
    }, [suma])

    const onClickHandler = () => {
        console.log("click")
        setSuma(suma + 1) //Esto no -> suma++ -> suma = suma + 1
    }

    return (
        <div>
            <button onClick={onClickHandler} className="btn btn-primary" type="submit">Click acá</button>
            {suma}
        </div>
    )
}

export default Contador