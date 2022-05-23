import React, {useState} from "react"
import CartItem from "./CartItem"
import {useCartContext} from "./context/CartContext"
import Swal from "sweetalert2"
import {generateOrder, updateStock} from "./firebase/firebaseService"
import CartResume from "./CartResume"

const initialBuyer = {
	name: "",
	phone: "",
	email: "",
}

const Cart = () => {
	const {cart, deleteCart} = useCartContext()

	const [buyer, setBuyer] = useState(initialBuyer)

	let total = 0

	for (let i = 0; i < cart.length; i++) {
		const price = cart[i].price * cart[i].quantity

		total += price
	}

	const order = {
		buyer,
		item: cart,
		total,
	}

	const handlerSubmit = (e) => {
		e.preventDefault()
		if (buyer.name !== "" && buyer.phone !== "" && buyer.email !== "") {
			generateOrder(order)
				.then((res) => {
					new Swal({
						title: "Tu orden fue enviada con éxito!",
						text: `Tu n° de orden es: ${res.id}`,
						icon: "success",
						button: "Ok",
					})
				})
				.then(() => cart.forEach((item) => updateStock(item.id, item.quantity)))
				.then(() => deleteCart())
				.catch(
					(err) => new Swal("Hubo un Error!", "Inténtalo nuevamente", "error")
				)
		} else {
			new Swal({
				title: "Hubo un error en tus datos",
				text: "Revisa el formulario de tus datos y vuelve a enviar el pedido",
				icon: "error",
				button: "Ok",
			})
		}
	}

	const handlerChange = (e) => {
		setBuyer({
			...buyer,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<>
			<div>
				<div className="text-center mt-4 text-3xl">
					<h1>Resumen de la compra</h1>
				</div>
				<div>
					<div className="container mx-auto">
						{cart.length > 0 ? (
							cart.map((product) => (
								<CartItem key={product.id} product={product} />
							))
						) : (
							<div className="text-center mt-4 text-3xl">
								<h1>No hay productos.</h1>
							</div>
						)}
					</div>
					<div className="container border mt-4 mx-auto">
						{cart.length !== 0 && (
							<>
								<div className="card text-center">
									<h2 className="mt-4 text-3xl">Resumen Carrito</h2>

									<div className="mt-4 text-3xl">
										{cart.map((prod) => (
											<CartResume key={prod.id} prod={prod} />
										))}
									</div>

									<h3 className="mt-4 text-3xl">Total a pagar: ${total}</h3>

									<hr />
									<p className="mt-4 text-3xl">
										Completa con tus datos para finalizar la compra
									</p>
									<form
										onSubmit={handlerSubmit}
										onChange={handlerChange}
										className="d-flex flex-column align-center container mt-2 mb-3"
									>
										<input
											className="form-control mb-2"
											type="text"
											placeholder="Nombre"
											name="name"
											value={order.name}
										/>
										<input
											className="form-control mb-2"
											type="number"
											placeholder="Telefono"
											name="phone"
											value={order.phone}
										/>
										<input
											className="form-control mb-2"
											type="email"
											placeholder="Email"
											name="email"
											value={order.email}
										/>

										<button className="btn btn-success d-block mt-4">
											Enviar orden
										</button>
									</form>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Cart
