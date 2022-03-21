import {useState} from "react";

import Card from "./Card"

export default function Main({setClosedCards, closedCards, addProgressIcon, changeFooterClass, setRememberAll}) {
  const decks = {
    react: [
      {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
      },
      {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
      },
      {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
      },
      {
        question: "Podemos colocar __ dentro do JSX ",
        answer: "expressões"
      },
      {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
      },
      {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
      },
      {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes "
      },
      {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
      }
    ]
  }

  const cardsText = [
    {
      text: "Pergunta 1",
    },
    {
      text: "Pergunta 2",
    },
    {
      text: "Pergunta 3",
    },
    {
      text: "Pergunta 4",
    },
    {
      text: "Pergunta 5",
    },
    {
      text: "Pergunta 6",
    },
    {
      text: "Pergunta 7",
    },
    {
      text: "Pergunta 8",
    }
  ]

  const [mainClassList, setMainClassList] = useState("main");
  const [cards] = useState(decks.react.sort(comparador))

  function changeMainClass(value) {
    setMainClassList(mainClassList + value);
  }

  function comparador() {
    return Math.random() - 0.5;
  }

  return (
    <main className={mainClassList}>
      {cards.map((card, index) => <Card key={card.question + index} setRememberAll={setRememberAll} changeMainClass={changeMainClass} changeFooterClass={changeFooterClass} setClosedCards={setClosedCards} closedCards={closedCards} addProgressIcon={addProgressIcon} text={cardsText[index].text} question={card.question} answer={card.answer} />)}
    </main>
  )
}