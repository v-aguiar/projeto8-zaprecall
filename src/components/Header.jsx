import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="ZapRecall Logo" />
        <h1 className="logo-text">ZapRecall</h1>
      </a>
    </header>
  )
}