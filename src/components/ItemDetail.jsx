import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {

	const { title, description, price, picUrl, stock } = product
	
	const [terminar, setTerminar] = useState(false)
	
	const onAdd = (count) => {
		setTerminar(true)
		console.log(count);
	}
	
	return (
		<>
			<div className='Card'>
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure className="px-10 pt-10">
						<img src={picUrl} alt="" className="rounded-xl" />
					</figure>
					<hr />
					<div className="card-body items-center text-center">
						<h2 className="card-title">{title}</h2>
						<h1>Descripción</h1>
						<p>{description}</p>
						<h1>Precio</h1>
						<p>$ {price}</p>
						<hr />
						<div className="card-actions">
							<div classNameName="mb-4">
								{terminar ? (
									<Link to="/CartWidget" className="btn bg-primary text-white btn-block ">
										Terminar Compra
									</Link>
								):(
								<ItemCount stock={stock} onAdd={onAdd} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail