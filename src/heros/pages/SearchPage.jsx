import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import styles from "./SearchPage.module.css";
import { HerosList } from "../components/HerosList";

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const query = queryString.parse(location.search);
	const { q = "" } = query;

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<div className={styles.searchPageContainer}>
			<h2 className={styles.searchTitle}>Search Superhero</h2>
			<form className={styles.searchForm} onSubmit={handleSearchSubmit}>
				<input
					className={styles.searchInput}
					type="text"
					name="searchText"
					placeholder="Superhero to search"
					value={searchText}
					onChange={onInputChange}
				/>
				<button className={styles.searchButton} type="submit">
					Search
				</button>
			</form>

			<HerosList name={q} />
		</div>
	);
};
