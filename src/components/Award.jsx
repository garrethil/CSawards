import PropTypes from "prop-types";
import "../index.css";

function Award({ title, name, desc, pic }) {
  const borderClass = name === "Andrew Parsons" ? "border border-white-3" : "";
  return (
    <div className="flex flex-row items-start bg-primary overflow-hidden max-w-3xl mx-auto pl-4 py-4">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={pic}
          alt="personal headshot"
          className={`h-auto rounded-full object-cover shadow-lg my-4 ${borderClass}`}
        />
      </div>
      {/* Text Section */}
      <div className="ml-2 p-6 w-2/3">
        <h2 className="text-2xl md:text-4xl text-primary-text font-bold mb-2 font-bebas tracking-wide">
          {title}
        </h2>
        <p className="text-secondary sm:text-[18px] md:text-[24px] mb-6 font-roboto tracking-wide font-light">
          {desc}
        </p>
        <button className="bg-primary-text text-primary px-4 py-2 hover:shadow-lg">
          <p className="sm:text-[16px] md:text-[20px]">
            <span className="mr-2">★</span> {name}
          </p>
        </button>
      </div>
    </div>
  );
}

Award.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default Award;
