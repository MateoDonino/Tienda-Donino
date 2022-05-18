import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../services/asyncmock"
import ItemList from "./ItemList"

const ItemListContainer = () => {
	const { categoryId } = useParams()
	const [category, setCategory] = useState()

	useEffect(() => {
		if (categoryId === undefined) {
			getItem().then((resp) => setCategory(resp))
		} else {
			getItem().then((resp) =>
				setCategory(resp.filter((product) => product.category === categoryId))
			)
		}
	}, [categoryId])

	return (
		<>
			<div className="mt-4">
				<ItemList category={category} />
			</div>
		</>
	)
}

export default ItemListContainer
