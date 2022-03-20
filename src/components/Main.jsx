import {useState} from "react";

import Card from "./Card"

export default function Main({setClosedCards, closedCards, addProgressIcon, changeFooterClass}) {
  const decks = {
    react: [
      {
        text: "Pergunta 1",
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
      },
      {
        text: "Pergunta 2",
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
      },
      {
        text: "Pergunta 3",
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
      },
      {
        text: "Pergunta 4",
        question: "Podemos colocar __ dentro do JSX ",
        answer: "expressões"
      },
      {
        text: "Pergunta 5",
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
      },
      {
        text: "Pergunta 6",
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
      },
      {
        text: "Pergunta 7",
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes "
      },
      {
        text: "Pergunta 8",
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
      },
    ]
  }

  const [mainClassList, setMainClassList] = useState("main");

  function changeMainClass(value) {
    setMainClassList(mainClassList + value);
  }

  return (
    <main className={mainClassList}>
      {decks.react.map(card => <Card key={card.text + card.question} changeMainClass={changeMainClass} changeFooterClass={changeFooterClass} setClosedCards={setClosedCards} closedCards={closedCards} addProgressIcon={addProgressIcon} text={card.text} question={card.question} answer={card.answer} />)}
    </main>
  )
}