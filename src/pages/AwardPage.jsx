import awardsData from "../assets/data";
import Award from "../components/Award";

function AwardsPage() {
  return (
    <div>
      <header className="flex bg-secondary items-center justify-between bg-primary p-4 sm:p-6 md:p-8">
        {/* Image on the Left */}
        <img
          src="images/logo.png" // Replace with your image path
          alt="Header Logo"
          className="h-16 sm:h-20 md:h-[140px] ml-4"
        />
        {/* Text on the Right */}
        <div className="ml-auto sm:ml-6 md:ml-8">
          <h1 className="text-2xl md:text-4xl text-primary-text font-bold font-bebas tracking-wider">
            2024 Winners
          </h1>
        </div>
      </header>
      <div id="awardPage" className="bg-primary pb-[120px]">
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

export default AwardsPage;
