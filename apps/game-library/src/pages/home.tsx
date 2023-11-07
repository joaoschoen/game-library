import { IGameData } from '@game-library/types';
import { GameCard } from '../features/collection/gameCard';

function Home() {
  const arr: Array<IGameData> = [
    {
      coverArt:
        'https://upload.wikimedia.org/wikipedia/en/3/3a/Diablo_Coverart.png',
      name: 'Diablo',
      releases: [],
    },
  ];
  return (
    <div className="w-full h-full grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {arr.map((game) => {
        return <GameCard gameData={game}></GameCard>;
      })}
    </div>
  );
}

export default Home;
