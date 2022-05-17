import React from "react"
import { Link } from "react-router-dom"

const Item = ({ title, price, img, brand, id }) => {
	return (
		
	<div className="Card">
		<div className="card card-compact w-96 bg-base-100 shadow-xl">
			<figure><img src={img} alt="" /></figure>
			<hr />
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<h2 className="card-brand">{brand}</h2>
				<h3>${price}</h3>
				<div className="card-actions justify-end">
					<div className="row">
						<div className="col ver-mas mt-4">
							<Link
								to={`/item/${id}`}
								className="w-100 btn d-block bg-primary text-white"
							>
								Ver mas
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)
}

export default Item
