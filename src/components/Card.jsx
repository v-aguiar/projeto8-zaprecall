﻿import {useState} from "react";

import CardSelect from "./CardSelect";
import FlipCard from "./FlipCard";

import triangleIcon from "../assets/triangle-icon.svg"
import failIcon from "../assets/failmark-icon.svg"
import almostIcon from "../assets/questionmark-icon.svg"
import successIcon from "../assets/checkmark-icon.svg"

export default function Card({question, answer, text, setClosedCards, closedCards, addProgressIcon, changeFooterClass, changeMainClass, setRememberAll}) {
  const [backTurn, setBackTurn] = useState("back-face face");
  const [frontTurn, setFrontTurn] = useState("front-face face");
  const [cardClassList, setCardClassList] = useState("card");
  const [visibleQuestion, setVisibleQuestion] = useState(true);
  const [cardSelectIcon, setCardSelectIcon] = useState(triangleIcon)

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
      setCardSelectIcon(failIcon);
      setClosedCards(closedCards + 1);
      addProgressIcon(failIcon);
      changeFooterClass();

      if(closedCards === 7) {
        changeMainClass(" --finished")
      };

      setRememberAll(false);
    }

    if(option === "orange") {
      setCardClassList("card --orange");
      setCardSelectIcon(almostIcon);
      setClosedCards(closedCards + 1);
      addProgressIcon(almostIcon);
      changeFooterClass();

      if(closedCards === 7) {
        changeMainClass(" --finished")
      };
    }

    if(option === "green") {
      setCardClassList("card --green");
      setCardSelectIcon(successIcon);
      setClosedCards(closedCards + 1);
      addProgressIcon(successIcon);
      changeFooterClass();

      if(closedCards === 7) {
        changeMainClass(" --finished")
      };
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