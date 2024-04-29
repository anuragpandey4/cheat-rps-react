import { useState } from "react";
import GameArea from "./GameArea";
import Header from "./Header";
import RoundInfo from "./RoundInfo";
import StartGame from "./StartGame";

export default function Game() {
  const [blueMoney, setBlueMoney] = useState(0);
  const [pinkMoney, setPinkMoney] = useState(0);
  const [playerOneChoice, setPlayerOneChoice] = useState("🔃");
  const [playerTwoChoice, setPlayerTwoChoice] = useState("🔃");
  const [refreeWinner, setRefreeWinner] = useState("");
  const [playerOneBribe, setPlayerOneBribe] = useState(0);
  const [playerTwoBribe, setPlayerTwoBribe] = useState(0);

  let realWinner = decideWinner(playerOneChoice, playerTwoChoice);
  // console.log(winner);

  return (
    <main className="game">
      <StartGame setBlueMoney={setBlueMoney} setPinkMoney={setPinkMoney} />
      <Header />
      <GameArea
        playerOneChoice={playerOneChoice}
        playerTwoChoice={playerTwoChoice}
        setPlayerOneChoice={setPlayerOneChoice}
        setPlayerTwoChoice={setPlayerTwoChoice}
        setRefreeWinner={setRefreeWinner}
        refreeWinner={refreeWinner}
        playerOneBribe={playerOneBribe}
        playerTwoBribe={playerTwoBribe}
        setPlayerOneBribe={setPlayerOneBribe}
        setPlayerTwoBribe={setPlayerTwoBribe}
      />
      <RoundInfo blueMoney={blueMoney} pinkMoney={pinkMoney} />
    </main>
  );
}

function decideWinner(player1, player2) {
  if (
    (player1 === "✂️" && player2 === "📃") ||
    (player1 === "📃" && player2 === "🪨") ||
    (player1 === "🪨" && player2 === "✂️")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}

function bribeOffer() {
  const bribeAmounts = [75, 100, 125, 150, 175, 200];
  return bribeAmounts[Math.floor(Math.random() * 6)];
  // return bribeAmounts[1];
}

// console.log(bribeOffer());
