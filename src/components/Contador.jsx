import { useState } from "react"

const Contador = ({initial, product}) => {

    const [cantidad, setCantidad] = useState(initial)

	const handleAdd = () => {
		if (cantidad < product.stock) {
			setCantidad(cantidad + 1)
		}
	}
	const handleRemove = () => {
		if (cantidad > initial) {
			setCantidad(cantidad - 1)
		}
	}

	return (
		<>
			<div className="d-flex flex-column ">
				<div className="btns-count">
					<button className="btn btn-block" onClick={handleRemove}>
						<i className="fas fa-minus"></i>
					</button>
					<label className="alert alert-white cantidad-items">{cantidad}</label>
					<button className="btn btn-block" onClick={handleAdd}>
						<i className="fas fa-plus"></i>
					</button>
				</div>

				<div className="agreg-carrito">
					<button
						className="btn bg-primary text-white btn-block "
						onClick={() =>
							alert(`Agregaste ${cantidad} ${product.title} al carrito`)
						}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default Contador