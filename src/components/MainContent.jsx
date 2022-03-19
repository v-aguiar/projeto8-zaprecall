import {useState} from "react"

import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

export default function MainContent() {
  const [closedCards, setClosedCards] = useState(0);
  const [progressIcon, setProgressIcon] = useState([]);

  function addProgressIcon(option) {
    /* eslint-disable */
    const icon = <img key={option} src={option} alt="Progress icon" />;

    const hasIcon = (progressIcon.filter(icone => icone.key === icon.key)) != 0;

    hasIcon ? setProgressIcon([...progressIcon]) : setProgressIcon([...progressIcon, icon]);
  }

  return (
    <>
      <Header />
      <Main setClosedCards={setClosedCards} closedCards={closedCards} addProgressIcon={addProgressIcon} />
      <Footer closedCards={closedCards}>
        {progressIcon.map(icon => icon)}
      </Footer>
    </>
  )
}