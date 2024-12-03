import "./index.css";
import HomePage from "./pages/HomePage";
import AwardsPage from "./pages/AwardPage";

function App() {
  return (
    <div>
      <div className="min-h-screen">
        <HomePage />
      </div>
      <div id="awards" className="bg-primary">
        <AwardsPage />
      </div>
    </div>
  );
}

export default App;
