import  { useState } from "react";
import "./App.css";
import Modal from "./Components/modal/Modal";



function App() {
    const [isModalActive, setModalActive] = useState(false)

    return (
        <div className="App">
          <button onClick={() => setModalActive(true)}>Открыть модалку</button>
          {isModalActive && <Modal isActive={isModalActive} setActive={setModalActive}/>}
        </div>
    )
}

export default App;
