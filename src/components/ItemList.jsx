import React from "react"
import Item from "./Item"

const ItemList = ({ productos }) => {
	console.log(productos)
	return (
		<>
			<div className="row">
				{productos.map((prod, index) => (
					<Item producto={prod} key={index} />
				))}
			</div>
		</>
	)
}

export default ItemList
