import React from "react"
import {useCartContext} from "./context/CartContext"

const CartItem = ({product}) => {
	const {deleteFromCart} = useCartContext()

	return (
		<div className="hero w-100">
			<div className="hero-content bg-stone-800 mt-4 rounded border-2 border-black flex-col lg:flex-row">
				<figure className="w-80 border-4 border-violet-700">
					<img src={product.picUrl} alt="" />
				</figure>
				<div className="card-body">
					<h2 className="card-title mt-4 text-3xl">{product.title}</h2>
					<p className="card-brand mt-4 text-3xl">{product.brand}</p>
					<p className="card-price mt-4 text-2xl">
						$ {product.price} x {product.quantity}
					</p>
					<div className="card-actions justify-end">
						<button
							onClick={() => deleteFromCart(product)}
							className="w-100 btn d-block bg-red-700 text-white"
						>
							Eliminar del carrito
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
