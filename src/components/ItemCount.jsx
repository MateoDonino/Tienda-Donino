import { useState } from "react"
import { useAppContext } from "./context/AppContext"
import { useCartContext } from "./context/CartContext"

const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (
		<>
			<div className="d-flex flex-column">
				<div className="btns-count">						
						<div className="flex mt-4">
							<button className="btn btn-ghost" onClick={handleRemove}>
								<i className="fas fa-minus"></i>
							</button>
							<label className="alert alert-white cantidad-items">{count}</label>
							<button className="btn btn-ghost " onClick={handleAdd}>
								<i className="fas fa-plus"></i>
							</button>
						</div>
				</div>
				<div className="agreg-carrito mt-4">
					<button
						className="btn bg-violet-700 text-white btn-block "
						onClick={() => handleClick(id, count)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount
