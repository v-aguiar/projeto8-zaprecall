export default function CardSelect({text, openQuestion, cardSelectIcon}) {
  return (
    <div className="card-select-question">
      <p className="card-text">{text}</p>
      <img onClick={openQuestion} src={cardSelectIcon} alt="Open question" />
    </div>
  )
}