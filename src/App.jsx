import "./index.css";
import HomePage from "./pages/HomePage";
import awardsData from "./assets/data";
import Award from "./components/Award";

function App() {
  return (
    <div>
      <div className="min-h-screen">
        <HomePage />
      </div>
      <div id="awardPage" className="bg-primary">
        {awardsData.map((award, index) => (
          <div key={index}>
            <Award
              title={award.title}
              name={award.name}
              desc={award.desc}
              pic={award.pic}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
