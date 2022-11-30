import React from "react";
import { getHerosByPublisher } from "../helpers/getHerosByPublisher";
import { HeroCard } from "./HeroCard";
import styles from "./HerosList.module.css";

export const HerosList = ({ publisher }) => {
	return (
		<div className={styles.HerosList}>
			{getHerosByPublisher(publisher).map((hero) => {
				return <HeroCard key={hero.id} hero={hero} />;
			})}
		</div>
	);
};
