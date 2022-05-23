import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {useAppContext} from "./context/AppContext"
import {getItem} from "./firebase/firebaseService"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
	const {products} = useAppContext()

	const [productClicked, setProductClicked] = useState({})

	const {id} = useParams()

	useEffect(() => {
		getItem(id).then((item) => setProductClicked({...item.data(), id: item.id}))
	}, [id, products])

	// Funcion onAdd
	const [terminar, setTerminar] = useState(false)
	const ondAdd = () => {
		setTerminar(true)
	}

	return (
		<>
			<div className="mt-3">
				{
					//loading && <h1 className="text-3xl text-center mt-4">Cargando ...</h1>}
					//{//!loading &&
					<ItemDetail
						product={productClicked}
						ondAdd={ondAdd}
						terminar={terminar}
					/>
				}
			</div>
		</>
	)
}

export default ItemDetailContainer
