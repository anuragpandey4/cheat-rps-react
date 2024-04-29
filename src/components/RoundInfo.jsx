export default function RoundInfo({ blueMoney, pinkMoney }) {
  return (
    <div className="round-info">
      <p className="round-number">Round : 1</p>
      <div className="round-target">
        <h3 className="target">Target</h3>
        <p className="blue-money">Blue Money : {blueMoney}$</p>
        <p className="pink-money">Pink Money: {pinkMoney}$</p>
      </div>
    </div>
  );
}
