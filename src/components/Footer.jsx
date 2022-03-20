import FinishedFooter from "./FinishedFooter";

export default function Footer({closedCards, footerClass, rememberAll, children}) {
  return (
    <footer className={footerClass}>
      {(closedCards === 8) ? <FinishedFooter rememberAll={rememberAll} /> : <p>{closedCards}/8 CONCLUÍDOS</p>}
      <div className="footer-icons">
        {children}
      </div>
    </footer>
  )
}