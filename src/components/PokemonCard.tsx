function PokemonCard({ pokemon }) {
	return (
		<figure>
			{pokemon.imgSrc === undefined ? (
				<p>"???"</p>
			) : (
				<img src={pokemon.imgSrc}></img>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
