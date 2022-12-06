import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
	const navigate = useNavigate();
	const { authState, logout } = useContext(AuthContext);
	const location = useLocation();

	const handleLogout = () => {
		const { pathname, search } = location;
		const lastPath = pathname + search;
		localStorage.setItem("lastPath", lastPath);

		navigate("/login", { replace: true });
		logout();
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<NavLink className="navbar-brand" to="/">
				Asociaciones
			</NavLink>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? "active" : ""}`
						}
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? "active" : ""}`
						}
						to="/dc"
					>
						DC
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? "active" : ""}`
						}
						to="/search"
					>
						Search
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? "active" : ""}`
						}
						to="/hero"
					>
						Hero
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">
						{authState?.user?.name}
					</span>
					<button
						className="nav-item nav-link btn"
						onClick={handleLogout}
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
