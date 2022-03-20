import {useState} from "react"

import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

export default function MainContent() {
  const [closedCards, setClosedCards] = useState(0);
  const [progressIcon, setProgressIcon] = useState([]);
  const [footerClass, setFooterClass] = useState("footer");
  const [rememberAll, setRememberAll] = useState("true");

  function changeFooterClass() {
    (closedCards === 7) ? setFooterClass("footer --finished") : setFooterClass("footer");

  }

  function addProgressIcon(option) {
    const icon = <img key={option + closedCards} src={option} alt="Progress icon" />;

    setProgressIcon([...progressIcon, icon]);
  }

  return (
    <>
      <Header />
      <Main changeFooterClass={changeFooterClass} setRememberAll={setRememberAll} setClosedCards={setClosedCards} closedCards={closedCards} addProgressIcon={addProgressIcon} />
      <Footer closedCards={closedCards} footerClass={footerClass} rememberAll={rememberAll} >
        {progressIcon.map(icon => icon)}
      </Footer>
    </>
  )
}