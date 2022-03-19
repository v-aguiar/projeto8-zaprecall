import {useState} from "react";

import CardSelect from "./CardSelect";
import FlipCard from "./FlipCard";

export default function Card({question, answer, text, setClosedCards, closedCards, addProgressIcon}) {
  const [backTurn, setBackTurn] = useState("back-face face");
  const [frontTurn, setFrontTurn] = useState("front-face face");
  const [cardClassList, setCardClassList] = useState("card");
  const [visibleQuestion, setVisibleQuestion] = useState(true);
  const [cardSelectIcon, setCardSelectIcon] = useState("assets/triangle-icon.svg")

  function openQuestion() {
    setVisibleQuestion(false);
    setCardClassList(cardClassList + " --open");
  }

  function turnCard() {
    setBackTurn(backTurn + " back-card-turn");
    setFrontTurn(frontTurn + " front-card-turn");
  }

  function turnCardBack(option) {
    setBackTurn("back-face face back-card-turn-back");
    setFrontTurn("front-face face front-card-turn-back");

    setVisibleQuestion(true);
    setCardClassList("card");
    addBorderColor(option);
  }

  function addBorderColor(option) {
    const icons = {
      fail: "assets/failmark-icon.svg",
      almost: "assets/questionmark-icon.svg",
      success: "assets/checkmark-icon.svg"
    }

    if(option === "red") {
      setCardClassList("card --red");
      setCardSelectIcon(icons.fail);
      setClosedCards(closedCards + 1);
      addProgressIcon(icons.fail);
    } else if(option === "orange") {
      setCardClassList("card --orange");
      setCardSelectIcon(icons.almost);
      setClosedCards(closedCards + 1);
      addProgressIcon(icons.almost);
    } else if(option === "green") {
      setCardClassList("card --green");
      setCardSelectIcon(icons.success);
      setClosedCards(closedCards + 1);
      addProgressIcon(icons.success);
    }
  }

  return (
    <div className={cardClassList}>
      {
        (visibleQuestion)
          ?
          <CardSelect text={text} cardSelectIcon={cardSelectIcon} openQuestion={openQuestion} />
          :
          <FlipCard turnCard={turnCard} turnCardBack={turnCardBack} backTurn={backTurn} frontTurn={frontTurn} question={question} answer={answer} />
      }
    </div>
  )
}