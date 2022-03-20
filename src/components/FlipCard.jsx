import CardButtons from "./CardButtons";

import turnIcon from "../assets/turn-icon.svg"

export default function FlipCard({backTurn, frontTurn, question, answer, turnCard, turnCardBack}) {

  return (
    <>
      <div className={frontTurn}>
        {question}
        <img className="card-turn-icon" onClick={turnCard} src={turnIcon} alt="Flip Card" />
      </div>
      <div className={backTurn}>
        {answer}
        <CardButtons turnCardBack={turnCardBack} />
      </div>
    </>
  )
}