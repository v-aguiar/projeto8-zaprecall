export default function FlipCard({backTurn, frontTurn, question, answer, turnCard}) {
  return (
    <>
      <div className={frontTurn}>
        {question}
        <img className="card-turn-icon" onClick={turnCard} src="assets/turn-icon.svg" alt="Flip Card" />
      </div>
      <div className={backTurn}>{answer}</div>
    </>
  )
}