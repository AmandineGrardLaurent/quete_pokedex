type pokemonProps = {
	name: string;
	imgSrc?: string;
};

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: pokemonProps[];
};

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	const handleClickBefore = () => {
		setPokemonIndex(pokemonIndex - 1);
		if (pokemonList[pokemonIndex].name === "pikachu") {
			alert("pika pikachu");
		}
	};
	const handleClickAfter = () => {
		setPokemonIndex(pokemonIndex + 1);
		if (pokemonList[pokemonIndex].name === "pikachu") {
			alert("pika pikachu");
		}
	};
	return (
		<nav>
			{pokemonIndex > 0 && (
				<button type="button" onClick={handleClickBefore}>
					Précedent
				</button>
			)}
			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={handleClickAfter}>
					Suivant
				</button>
			)}
		</nav>
	);
}
export default NavBar;
