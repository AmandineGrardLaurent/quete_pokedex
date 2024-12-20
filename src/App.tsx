import { useState } from "react";
import "./App.css";
// import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<div>
			<nav>
				{pokemonList.map((p, index) => (
					<button
						type="button"
						key={p.name}
						onClick={() => setPokemonIndex(index)}
					>
						{p.name}
					</button>
				))}
			</nav>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</div>
	);
}

export default App;
