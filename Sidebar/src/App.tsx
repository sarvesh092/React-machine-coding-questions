import React, {useState} from "react";
import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} onClose={() =>setIsOpen(false)} />
      <main>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
};

export default App;
