function HomePage() {
  return (
    <div className="h-screen w-screen bg-homepage bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header */}
      <header className="absolute flex top-0 w-full bg-primary text-white p-4 shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-4 sm:p-6 md:p-7 ml-auto">
          2024 winners
        </h2>
      </header>

      {/* Centered Logo and Text */}
      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Container with consistent width */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-secondary-text font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] my-2 sm:mb-3 md:mb-4">
            1st Annual
          </h1>
          <img src="images/logo.png" alt="Logo" className="h-[30%]" />
          <h3 className="text-secondary text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] mt-10 md:mt-[12%]">
            where C+S quirks meet kudos
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
