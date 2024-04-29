import { useState } from "react";

export default function GameArea({
  playerOneChoice,
  playerTwoChoice,
  setPlayerOneChoice,
  setPlayerTwoChoice,
  setRefreeWinner,
  refreeWinner,
  playerOneBribe,
  playerTwoBribe,
  setPlayerOneBribe,
  setPlayerTwoBribe,
}) {
  return (
    <div className="game-area">
      <div>
        <div className="player-one">
          <div className="player-one-details">
            <p>Player 1</p>
            <div className="emote">👦🏽</div>
            <div className="bribe">bribe offer : {playerOneBribe}</div>
          </div>
          <div className="player-one-choice emote">{playerOneChoice}</div>
        </div>
      </div>

      <div>
        <div className="refree">
          <div className="choose-winner">
            <h3>Choose Winner</h3>
            <div className="choice-btns">
              <button
                onClick={(e) => {
                  setRefreeWinner("player1");
                  e.target.blur();
                }}
                className="player-one-wins"
              >
                Player 1
              </button>
              <button
                onClick={(e) => {
                  setRefreeWinner("player2");
                  e.target.blur();
                }}
                className="player-two-wins"
              >
                Player 2
              </button>
            </div>
            <p>
              Round Winner is <span className="winnerText">{refreeWinner}</span>
            </p>
          </div>
          <div className="refree-details">
            <div className="emote">🧑🏽‍⚖️</div>
            <p>Cheater Refree</p>
            <button
              onClick={(e) => {
                setPlayerOneChoice(randomRpsChoice);
                setPlayerTwoChoice(randomRpsChoice);
                setPlayerOneBribe(bribeOffer);
                setPlayerTwoBribe(bribeOffer);
                e.target.blur();
              }}
              className="game-btn btn"
            >
              Game On
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="player-two">
          <div className="player-two-details">
            <p>Player 2</p>
            <div className="emote">👧🏽</div>
            <div className="bribe">bribe offer : {playerTwoBribe}</div>
          </div>
          <div className="loader emote">{playerTwoChoice}</div>
        </div>
      </div>
    </div>
  );
}

function randomRpsChoice() {
  const rpsArray = ["🪨", "📃", "✂️"];
  const rpsChoice = rpsArray[Math.floor(Math.random() * 3)];
  // console.log(rpsChoice);
  return rpsChoice;
}

function bribeOffer() {
  const bribeAmounts = [75, 100, 125, 150, 175, 200];
  return bribeAmounts[Math.floor(Math.random() * 6)];
  // return bribeAmounts[1];
}

// console.log(bribeOffer());
