export default function PokerCard({ mockPokemonData }) {
  return (
    <div>
      <h2>{mockPokemonData.name}</h2>
      <img src={mockPokemonData.sprites.front_default} alt="Pokemon" />
      <a href={mockPokemonData.video} target="_blank" rel="noopener noreferrer">
        Watch Pokemon Video
      </a>
    </div>
  );
}
