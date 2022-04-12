export default function Tips({ info }) {
  const allyTips = info.allytips;
  const enemyTips = info.enemytips;
  const name = info.name;
  return (
    <>
      <h2>Consejos</h2>
      <div className="tip-info">
        <h3>Jugando con {name}</h3>
        {allyTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </div>
      <div className="tip-info">
        <h3>Jugando contra {name}</h3>
        {enemyTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </div>
    </>
  );
}
