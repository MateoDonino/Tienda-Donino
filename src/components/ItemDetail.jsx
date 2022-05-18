import React, { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ product }) => {
	const { title, description, price, picUrl, stock, id, brand } = product

	const [terminar, setTerminar] = useState(false)

	const onAdd = (count) => {
		setTerminar(true)
		console.log(count)
	}

	return (
		<>
			<div className="hero w-100">
				<div className="hero-content bg-green-800 mt-5 rounded border-2 border-yellow-700 flex-col lg:flex-row">
					<img
						src={picUrl}
						className="max-w-sm rounded-lg border-4 border-yellow-700 shadow-2xl"
						alt={`${title} de ${brand}`}
					 />
					<div>
						<h1 className="text-3xl font-bold text-stone-50">{brand}</h1>
						<h2 className="text-5xl font-bold text-stone-50">{title}</h2>
						<p className="py-6 text-stone-50">{description}</p>
						<div className="inline-block align-bottom mr-5">
							<span className="font-bold text-stone-50 text-5xl leading-none align-baseline">
								$ {price}
							</span>
							{terminar ? (
								<Link
									to="/cart"
									className="btn bg-yellow-700 text-stone-900 btn-block"
								>
									Terminar Compra
								</Link>
							) : (
								<ItemCount stock={stock} onAdd={onAdd} id={id} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
