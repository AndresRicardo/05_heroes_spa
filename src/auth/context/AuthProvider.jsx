import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const initialState = {
	logged: false,
};

const init = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	return {
		logged: !!user,
		user: user,
	};
};

export const AuthProvider = ({ children }) => {
	const login = (username = "") => {
		const user = { id: "asdf", name: username };
		const action = {
			type: types.login,
			payload: user,
		};

		localStorage.setItem("user", JSON.stringify(user));

		dispatch(action);
	};

	const logout = () => {
		const action = {
			type: types.logout,
			payload: null,
		};

		localStorage.removeItem("user", "JSON.stringify(user)");

		dispatch(action);
	};

	const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

	return (
		<AuthContext.Provider
			value={{ authState: authState, login: login, logout: logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
