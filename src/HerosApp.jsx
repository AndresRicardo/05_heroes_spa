import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

const initialState = {
	logged: false,
};

export const HerosApp = () => {
	return (
		<>
			<AuthProvider value={initialState}>
				<AppRouter />
			</AuthProvider>
		</>
	);
};
