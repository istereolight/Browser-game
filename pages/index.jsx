import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { useState } from "react";

export default function HomePage() {
  const [playersCount] = useState(4);
  // const {
  //   cells,
  //   currentMove,
  //   handleCellClick,
  //   nextMove,
  //   winnerSequence,
  //   handlePlayerTimeOver,
  //   winnerSymbol,
  // } = useGameState(playersCount);

  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}

{
  /* <GameTitle playersCount={playersCount} />
<GameInfo
  playersCount={playersCount}
  className="mt-4"
  currentMove={currentMove}
  isWinner={!!winnerSymbol}
  onPlayerTimeOver={handlePlayerTimeOver}
/>
{winnerSymbol && (
  <div className=" my-4">
    <GameSymbol symbol={winnerSymbol} />
  </div>
)}
<GameField
  playersCount={playersCount}
  className=" mt-6"
  cells={cells}
  currentMove={currentMove}
  nextMove={nextMove}
  handleCellClick={handleCellClick}
  winnerSequence={winnerSequence}
  winnerSymbol={winnerSymbol}
/> */
}
