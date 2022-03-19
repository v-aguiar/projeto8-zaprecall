export default function Footer({closedCards: number, children}) {
  return (
    <footer className="footer">
      <p>{number}/8 CONCLUÍDOS</p>
      <div className="footer-icons">
        {children}
      </div>
    </footer>
  )
}