import React from "react"
import Item from "./Item"

const ItemList = ({ category }) => {
	console.log(category)
	return (
		<>
			<div className="row">
				{category &&
					category.map((product) => (
						<Item
							id={product.id}
							title={product.title}
							price={product.price}
							brand={product.brand}
							img={product.picUrl}
							key={product.id}
						/>
					))}
			</div>
		</>
	)
}

export default ItemList
