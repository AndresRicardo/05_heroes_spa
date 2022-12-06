import { types } from "../types/types";

export const AuthReducer = (state, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				logged: true,
				user: action.payload,
			};
			break;

		case types.logout:
			return {
				...state,
				logged: false,
				user: null,
			};
			break;

		default:
			return state;
			break;
	}
};
