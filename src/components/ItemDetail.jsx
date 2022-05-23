import React, {useState} from "react"
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({product, terminar, onAdd}) => {
	return (
		<>
			<div className="hero w-100">
				<div className="hero-content bg-stone-800 mt-5 rounded border-2 border-black flex-col lg:flex-row">
					<img
						src={product.picUrl}
						className="max-w-sm rounded-lg border-4 border-violet-700 shadow-2xl"
						alt={`${product.title} de ${product.brand}`}
					/>
					<div>
						<h1 className="text-3xl font-bold text-stone-50">
							{product.brand}
						</h1>
						<h2 className="text-5xl font-bold text-stone-50">
							{product.title}
						</h2>
						<p className="py-6 text-stone-50">{product.description}</p>
						<div className="inline-block align-bottom mr-5">
							<span className="font-bold text-stone-50 text-5xl leading-none align-baseline">
								$ {product.price}
							</span>
							{terminar ? (
								<Link
									to="/cart"
									className="btn mt-4 bg-violet-700 text-white btn-block"
								>
									Terminar Compra
								</Link>
							) : (
								<ItemCount product={product} onAdd={onAdd} initial={1} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
