import React, { useState } from "react";
import Profile from "../Pages/Profile";
import Account from "../Pages/Account";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Account", component: Account },
  ];
  const ActiveComponent = tabs[activeTab].component;
  const handlePrevious = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : prev));
  };
  return (
    <div>
      <div
        style={{
          border: "1px solid green",
          minHeight: "70vh",
          minWidth: "70vw",
        }}
      >
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid green",
            cursor: "pointer",
          }}
        >
          {tabs.map((tab, index) => (
            <div
              key={tab.name}
              style={{
                padding: "8px",
                borderRight: "1px solid green",
                backgroundColor: activeTab === index ? "green" : "transparent",
              }}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </div>
          ))}
        </div>

        <ActiveComponent />
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "4px",
          marginTop: "1rem",
          justifyContent: "center",
        }}
      >
        <button onClick={handlePrevious} disabled={activeTab <= 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={activeTab >= tabs.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Tabs;
