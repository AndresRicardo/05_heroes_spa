import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HerosRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<MarvelPage />} />
					<Route path="/marvel" element={<MarvelPage />} />
					<Route path="/dc" element={<DcPage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/hero/:id" element={<HeroPage />} />
				</Routes>
			</div>
		</>
	);
};
