export const getPathByHero = (hero) => {
	if (hero.publisher === "DC Comics") return "/dc";
	else return "/marvel";
};
