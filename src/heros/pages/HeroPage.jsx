import { useMemo } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { getPathByHero } from "../helpers/getPathByHero";
import styles from "./HeroPage.module.css";
import "animate.css";

export const HeroPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { id } = params;
	const hero = useMemo(() => getHeroById(id), [id]);

	const handleBack = (hero) => {
		const publisherPath = getPathByHero(hero);
		navigate(publisherPath);
	};

	if (hero === undefined) return <Navigate to={-1} />;

	return (
		<>
			{hero === undefined ? (
				<></>
			) : (
				<>
					<div className={styles.heroPageContainer}>
						<h1 className={styles.heroPageTitle}>
							{hero.superhero.toUpperCase()}
						</h1>
						<div
							className={`${styles.cardContainer} animate__animated animate__fadeInLeft`}
						>
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
									<NavLink
										className={styles.atras}
										to={getPathByHero(hero)}
									>
										Publisher: {hero.publisher}
									</NavLink>
								</p>
								<p className={styles.characters}>
									Characters: {hero.characters}
								</p>
							</div>
						</div>

						<button
							className={styles.back}
							onClick={() => handleBack(hero)}
						>
							Back
						</button>
					</div>
				</>
			)}
		</>
	);
};
