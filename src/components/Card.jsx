import {useState} from "react";
import FlipCard from "./FlipCard";

export default function Card({question, answer, text}) {
  const [backTurn, setBackTurn] = useState("back-face face");
  const [frontTurn, setFrontTurn] = useState("front-face face");
  const [cardClassList, setCardClassList] = useState("card");
  const [visibleQuestion, setVisibleQuestion] = useState(true);

  function turnCard() {
    setBackTurn(backTurn + " back-card-turn");
    setFrontTurn(frontTurn + " front-card-turn");
  }

  function openQuestion() {
    setCardClassList(cardClassList + " --open");
    setVisibleQuestion(false);
  }

  return (
    <div className={cardClassList}>
      {
        (visibleQuestion)
          ?
          <>
            <p className="card-text">{text}</p>
            <img onClick={openQuestion} src="assets/triangle-icon.svg" alt="Open question" />
          </>
          :
          <FlipCard turnCard={turnCard} backTurn={backTurn} frontTurn={frontTurn} question={question} answer={answer} />
      }
    </div>
  )
}