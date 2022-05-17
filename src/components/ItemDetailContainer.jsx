import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../services/asyncmock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getItem().then((resp) =>
			setProduct(resp.find((item) => item.id === Number(id)))
		)
	}, [id])

	console.log(product)

	return (
		<div className="container mt-3">
			<ItemDetail product={product} />
		</div>
	)
}

export default ItemDetailContainer