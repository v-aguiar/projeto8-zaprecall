import logo from "../assets/logo.svg"

export default function HomePage({hideHome}) {
  return (
    <article id="homepage">
      <img src={logo} alt="ZapRecall Logo" />
      <h1 className="logo-text --first-screen">ZapRecall</h1>

      <button className="homepage-button" onClick={() => hideHome(false)}>Iniciar Recall!</button>
    </article>
  )
}