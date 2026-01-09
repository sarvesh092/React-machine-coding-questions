import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
};

export default App;
