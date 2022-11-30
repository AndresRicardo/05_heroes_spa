import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/HeroCard.module.css";

export const HeroCard = ({ hero }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardImageContainer}>
				<img
					className={styles.cardImage}
					src={`/assets/heros/${hero.id}.jpg`}
					alt="superhero image"
				/>
			</div>
			<div className={styles.cardInfoContainer}>
				<h2 className={styles.heroName}>{hero.superhero}</h2>
				<p className={styles.heroAlterEgo}>
					Alter ego: {hero.alter_ego}
				</p>
				<p className={styles.firstAppears}>
					First appears: {hero.first_appearance}
				</p>
				<p className={styles.publisher}>Publisher: {hero.publisher}</p>
				<NavLink className={styles.masInfo} to={`/hero/${hero.id}`}>
					Más info...
				</NavLink>
			</div>
		</div>
	);
};
