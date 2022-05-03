import React from "react"

const Item = ({ producto }) => {
	const { title, price, picUrl, brand } = producto
	return (
		<>
			<div className="col-md-4">
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img src={picUrl} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{title}</h2>
						<p>{price}</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Ver más</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Item
