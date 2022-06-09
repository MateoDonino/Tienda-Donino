import {Link} from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
	return (
		<>
			<div className="navbar bg-base-100 mt-4">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex="0" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabIndex="0"
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border-2 border-white"
						>
							<Link className="nav-link active" to="/category/memorias-ram">
								<li>Memorias RAM</li>
							</Link>
							<Link className="nav-link active" to="/category/monitores">
								<li>Monitores</li>
							</Link>
							<Link className="nav-link active" to="/category/placas-de-video">
								<li>Placas de Video</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<Link className="btn btn-ghost normal-case text-2xl" to="/">
						Tienda de PC
					</Link>
				</div>
				<div className="navbar-end">
					<Link to={"/cart"}>
						<CartWidget />
					</Link>
				</div>
			</div>
		</>
	)
}

export default NavBar
