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
	const handleClickBefore = () => setPokemonIndex(pokemonIndex - 1);
	const handleClickAfter = () => setPokemonIndex(pokemonIndex + 1);
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
