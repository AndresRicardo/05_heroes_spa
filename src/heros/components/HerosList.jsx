import { useMemo } from "react";
import { getHerosByName } from "../helpers/getHerosByName";
import { getHerosByPublisher } from "../helpers/getHerosByPublisher";
import { HeroCard } from "./HeroCard";
import styles from "./HerosList.module.css";

export const HerosList = ({ publisher, name }) => {
	let heros = [];
	let showError = false;

	if (publisher && !name) {
		heros = getHerosByPublisher(publisher);
		showError = heros.length >= 1;
	}
	if (name && !publisher) {
		heros = getHerosByName(name);
	}
	showError = (publisher || name) && heros.length < 1;

	return (
		<div className={styles.HerosList}>
			{showError && <div className={styles.alertMessage}>No results</div>}

			{heros.map((hero) => {
				return <HeroCard key={hero.id} hero={hero} />;
			})}
		</div>
	);
};
