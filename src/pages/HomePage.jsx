function HomePage() {
  return (
    <div className="h-screen w-screen bg-homepage bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-b from-black to-transparent"></div>
      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header */}
      <header className="absolute flex top-0 w-full bg-primary text-white p-8 shadow-lg">
        <h2 className="text-2xl sm:text-3xl p-4 sm:p-6 md:p-7 ml-auto">
          2024 winners
        </h2>
      </header>

      {/* Centered Logo and Text */}
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Container with consistent width */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-secondary-text font-bold text-[40px] md:text-[48px] lg:text-[55px] my-2 sm:mb-3 md:mb-4">
            1st Annual
          </h1>
          <img src="images/logo.png" alt="Logo" className="h-[35%]" />
          <h3 className="text-secondary font-thin text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] mt-[10%]">
            where C+S quirks meet kudos
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
