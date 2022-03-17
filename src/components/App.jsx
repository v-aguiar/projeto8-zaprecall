import {useState} from "react";
import HomePage from "./HomePage";
import MainContent from "./MainContent";

export default function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="app">
      {(showHome) ? <HomePage hideHome={setShowHome} /> : <MainContent />}
    </div>
  )
}