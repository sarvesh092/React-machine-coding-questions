import React from "react";

const Sidebar = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  return (
    <div>
      <div>
        <h2>Sidebar App</h2>
        <button onClick={onClose}>❌</button>
      </div>
      <aside className={`Sidebar ${isOpen ? "open" : "closed"}`}>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
