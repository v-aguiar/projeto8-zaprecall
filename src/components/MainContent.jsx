import {useState} from "react"

import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

export default function MainContent() {
  const [closedCards, setClosedCards] = useState(0);
  const [progressIcon, setProgressIcon] = useState([]);
  const [footerClass, setFooterClass] = useState("footer");


  function changeFooterClass() {
    (closedCards === 7) ? setFooterClass("footer --finished") : setFooterClass("footer");

  }

  function addProgressIcon(option) {
    /* eslint-disable */
    const icon = <img key={option} src={option} alt="Progress icon" />;

    const hasIcon = (progressIcon.filter(icone => icone.key === icon.key)) != 0;

    hasIcon ? setProgressIcon([...progressIcon]) : setProgressIcon([...progressIcon, icon]);
  }

  return (
    <>
      <Header />
      <Main changeFooterClass={changeFooterClass} setClosedCards={setClosedCards} closedCards={closedCards} addProgressIcon={addProgressIcon} />
      <Footer closedCards={closedCards} footerClass={footerClass}>
        {progressIcon.map(icon => icon)}
      </Footer>
    </>
  )
}