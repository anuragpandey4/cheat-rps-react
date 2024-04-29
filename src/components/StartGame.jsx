export default function StartGame({ setBlueMoney, setPinkMoney }) {
  const handleClick = (e) => {
    e.target.classList.add("hide");
    setBlueMoney(100 + Math.floor(Math.random() * 100));
    setPinkMoney(250 + Math.floor(Math.random() * 250));
  };

  return (
    <button onClick={handleClick} className="start-game">
      Start
    </button>
  );
}
