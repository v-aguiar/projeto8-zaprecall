import {useState} from "react";
import CardSelect from "./CardSelect";
import FlipCard from "./FlipCard";

export default function Card({question, answer, text}) {
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
    if(option === "red") {
      setCardClassList("card --red");
      setCardSelectIcon("assets/failmark-icon.svg")
    }
    if(option === "orange") {
      setCardClassList("card --orange");
      setCardSelectIcon("assets/questionmark-icon.svg")
    }
    if(option === "green") {
      setCardClassList("card --green");
      setCardSelectIcon("assets/checkmark-icon.svg")
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