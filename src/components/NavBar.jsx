import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Tienda de PC
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link active" aria-current="page" href="#">
								Inicio
							</a>
							<Link className="nav-link" to="/category/memoriasram">
								Memorias RAM
							</Link>
							<Link className="nav-link" to="/category/monitores">
								Monitores
							</Link>
							<Link className="nav-link" to="/category/placasdevideo">
								Placas de Video
							</Link>
						</div>
					</div>
					<CartWidget />
				</div>
			</nav>
		</>
	)
}

export default NavBar
