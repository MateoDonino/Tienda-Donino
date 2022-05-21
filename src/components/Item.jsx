import React from "react"
import { Link } from "react-router-dom"

const Item = ({ title, price, img, brand, id }) => {
	return (
		<div className="card border-2 border-black card-compact w-96 bg-base-100 shadow-xl mt-4">
			<figure>
				<img src={img} alt="" />
			</figure>
			<hr className="border-2 border-violet-700"/>
			<div className="card-body bg-stone-800">
				<h2 className="card-title text-stone-50">{title}</h2>
				<h2 className="card-brand text-stone-50">{brand}</h2>
				<h3 className="text-stone-50">$ {price}</h3>
				<div className="card-actions justify-end">
					<div className="row">
						<div className="col ver-mas mt-4">
							<Link
								to={`/item/${id}`}
								className="w-100 btn d-block bg-violet-700 text-white"
							>
								Ver mas
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
