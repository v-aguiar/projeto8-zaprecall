export default function HomePage() {
  function startRecall() {
    document.querySelector("#homepage").classList.add("--hidden");
  }

  return (
    <article id="homepage">
      <img src="assets/logo.svg" alt="ZapRecall Logo" />
      <h1 className="logo-text --first-screen">ZapRecall</h1>

      <button className="homepage-button" onClick={() => startRecall()}>Iniciar Recall!</button>
    </article>
  )
}