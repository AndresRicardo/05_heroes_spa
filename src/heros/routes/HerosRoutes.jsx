import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import styles from "./HerosRoutes.module.css";

export const HerosRoutes = () => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
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
