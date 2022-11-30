import { Navigate, NavLink, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import styles from "./HeroPage.module.css";

export const HeroPage = () => {
	const params = useParams();
	const { id } = params;
	const hero = getHeroById(id);

	if (hero === undefined) return <Navigate to={-1} />;

	return (
		<>
			{hero === undefined ? (
				<></>
			) : (
				<>
					<div className={styles.heroPageContainer}>
						<h1>{hero.superhero.toUpperCase()}</h1>
						<div className={styles.cardContainer}>
							<div className={styles.cardImageContainer}>
								<img
									className={styles.cardImage}
									src={`/assets/heros/${hero.id}.jpg`}
									alt="superhero image"
								/>
							</div>
							<div className={styles.cardInfoContainer}>
								<h2 className={styles.heroName}>
									{hero.superhero}
								</h2>
								<p className={styles.heroAlterEgo}>
									Alter ego: {hero.alter_ego}
								</p>
								<p className={styles.firstAppears}>
									First appears: {hero.first_appearance}
								</p>
								<p className={styles.publisher}>
									Publisher: {hero.publisher}
								</p>
								<NavLink
									className={styles.masInfo}
									to={`/hero/${hero.id}`}
								>
									Más info...
								</NavLink>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
