import React from "react"
import {useCartContext} from "./context/CartContext"

const CartItem = ({product}) => {
	const {deleteFromCart} = useCartContext()

	return (
		<div className="card mt-4 card-side bg-base-100 shadow-xl">
			<figure>
				<img src={product.picUrl} alt="" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{product.title}</h2>
				<p>{product.brand}</p>
				<p>$ {product.price}</p>
				<div className="card-actions justify-end">
					<button
						onClick={() => deleteFromCart(product)}
						className="w-100 btn d-block bg-violet-700 text-white"
					>
						Eliminar del carrito
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
