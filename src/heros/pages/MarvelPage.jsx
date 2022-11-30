import React from "react";
import { HerosList } from "../components/HerosList";

export const MarvelPage = () => {
	return (
		<>
			<h1>Marvel Comics</h1>
			<hr />
			<HerosList publisher={"Marvel Comics"} />
		</>
	);
};
