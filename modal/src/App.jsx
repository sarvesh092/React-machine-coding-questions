import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="app">
      <button onClick={handleModal}>Open Modal</button>
      <Modal isOpen={isOpen} isClose={() => setIsOpen(false)}>
        <h1 style={{color: "#020101"}}>hi i am a modal</h1>
      </Modal>
    </div>
  );
}

export default App;
