import successIcon from "../assets/party-icon.svg"
import sadIcon from "../assets/sad-icon.svg"

export default function FinishedFooter() {
  const finishStatus = {
    success: {
      icon: successIcon,
      iconDescription: "PARABÉNS!",
      text: "Você não esqueceu de nenhum flashcard!"
    },
    notYet: {
      icon: sadIcon,
      iconDescription: "PUTZ!",
      text: `Ainda faltaram alguns...
      Mas não desanime!`
    }
  }

  return (
    <div className="finished">
      <div className="icon-container">
        <img src={finishStatus.success.icon} alt="Finished status icon" />
        <p className="icon-description">{finishStatus.success.iconDescription}</p>
      </div>
      <p className="description" >{finishStatus.success.text}</p>
    </div>
  )
}