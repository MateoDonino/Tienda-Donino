import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../services/asyncmock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()
	const [loading, setLoading] = useState (true)

	useEffect(() => {
		getItem().then((resp) =>
			setProduct(resp.find((item) => item.id === Number(id)))
		)
	}, [id])

	console.log(product)

	return (
		<>
			<div className="mt-3">
				{//loading && <h1 className="text-3xl text-center mt-4">Cargando ...</h1>}
				//{//!loading &&
				<ItemDetail product={product} />
				}
			</div>
		</>
	)
}

export default ItemDetailContainer
