function HomePage() {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID '${sectionId}' not found.`);
    }
  };

  return (
    <div className="h-screen w-screen bg-homepageSmall md:bg-homepageBig bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-cover bg-black bg-opacity-60"></div>

      {/* Header */}
      <div className="absolute bg-primary top-0 left-0 w-full flex justify-end items-center p-4 sm:p-6 z-50">
        <button
          className="text-secondary hover:text-primary-text hover:underline p-3 sm:p-4 md:p-6 rounded-md shadow-lg"
          onClick={(e) => handleScrollToSection(e, "awards")}
        >
          <h2 className="text-lg sm:text-xl md:text-4xl font-bebas tracking-wider">
            2024 Winners
          </h2>
        </button>
      </div>

      {/* Centered Logo and Text */}
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Content Container */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-secondary-text font-bold text-[40px] md:text-[48px] lg:text-[60px] my-2 sm:mb-3 md:mb-4 font-bebas tracking-wider">
            1st Annual
          </h1>
          <img src="images/logo.png" alt="Logo" className="h-[35%]" />
          <h3 className="text-secondary text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] mt-[10%] font-roboto font-thin italic">
            where C+S quirks meet kudos
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
