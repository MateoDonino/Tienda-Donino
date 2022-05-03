import { useState } from "react"
import { getItem } from "../services/asyncmock"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
	const [productos, setProductos] = useState([])

	getItem().then((data) => setProductos(data))

	return (
		<>
			<div className="container">
				<h1 className="text-center">{props.greeting}</h1>
				<ItemList productos={productos} />
			</div>
		</>
	)
}

export default ItemListContainer
