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
        <header className="h-100px bg-primary-text"></header>
        {awardsData.map((award, index) => (
          <div className="" key={index}>
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
