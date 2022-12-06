import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { LoginPage } from "../auth";
import { HerosRoutes } from "../heros";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/login"
				element={
					<PublicRoute>
						<LoginPage />
					</PublicRoute>
				}
			/>
			<Route
				path="/*"
				element={
					<PrivateRoute>
						<HerosRoutes />
					</PrivateRoute>
				}
			/>

			{/* <Route path="/login" element={<LoginPage />} />
			<Route path="/*" element={<HerosRoutes />} /> */}
		</Routes>
	);
};
