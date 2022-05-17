import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
	return (
		<>
			<div className="navbar bg-base-100">
  			<div className="navbar-start">
    			<div className="dropdown">
      			<label tabindex="0" className="btn btn-ghost btn-circle">
        			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      			</label>
      			<ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							<Link className="nav-link active" to="/category/memoriasram">
								<li><a>Memorias RAM</a></li>
							</Link>
							<Link className="nav-link active" to="/category/monitores">
								<li><a>Monitores</a></li>
							</Link>
							<Link className="nav-link active" to="/category/placasdevideo">
								<li><a>Placas de Video</a></li>
							</Link>
      			</ul>
    			</div>
  			</div>
  			<div className="navbar-center">
					<Link to="/">
						<a className="btn btn-ghost normal-case text-xl">Tienda de PC</a>
					</Link>
  			</div>
				<CartWidget/>
			</div>
		</>
	)
}

export default NavBar
