import React from "react";
import { HerosList } from "../components/HerosList";

export const DcPage = () => {
	return (
		<>
			<h1>DC Comics</h1>
			<hr />
			<HerosList publisher={"DC Comics"} />;
		</>
	);
};
