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
	const handleClickAfter = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		} else {
			setPokemonIndex(pokemonIndex - pokemonIndex);
		}
	};
	const handleClickBefore = () => {
		if (pokemonIndex === 0) {
			setPokemonIndex(pokemonIndex + (pokemonList.length - 1));
		} else {
			setPokemonIndex(pokemonIndex - 1);
		}
	};
	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			<button type="button" onClick={handleClickBefore}>
				Pokemon précédent
			</button>
			<button type="button" onClick={handleClickAfter}>
				Pokemon suivant
			</button>
		</div>
	);
}

export default App;
