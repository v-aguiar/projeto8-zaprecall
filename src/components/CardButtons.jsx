export default function CardButtons({turnCardBack}) {
  return (
    <div className="card-buttons">
      <button onClick={() => turnCardBack("red")} className="btn --red">Não lembrei</button>
      <button onClick={() => turnCardBack("orange")} className="btn --orange">Quase não lembrei</button>
      <button onClick={() => turnCardBack("green")} className="btn --green">Zap ⚡</button>
    </div>
  )
}