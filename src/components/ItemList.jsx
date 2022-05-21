import React from "react"
import Item from "./Item"

const ItemList = ({ category }) => {
	return (
		<>
			<div className="container mx-auto flex flex-wrap gap-4 justify-center">
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
