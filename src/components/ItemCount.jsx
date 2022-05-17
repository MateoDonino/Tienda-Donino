import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(0)

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > stock) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<div className="d-flex flex-column ">
				<div className="btns-count">
					<button className="btn btn-block" onClick={handleRemove}>
						<i className="fas fa-minus"></i>
					</button>
					<label className="alert alert-white cantidad-items">{count}</label>
					<button className="btn btn-block" onClick={handleAdd}>
						<i className="fas fa-plus"></i>
					</button>
				</div>
				<div className="agreg-carrito">
					<hr />
					<hr />
					<button
						className="btn bg-primary text-white btn-block "
						onClick={() => onAdd(count)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount