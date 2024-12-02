import PropTypes from "prop-types";
import "../index.css";

function Award({ title, name, desc, pic }) {
  return (
    <div className="flex flex-row items-start bg-primary overflow-hidden max-w-3xl mx-auto">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={pic}
          alt="personal headshot"
          className="h-auto rounded-full object-cover shadow-lg my-4"
        />
      </div>
      {/* Text Section */}
      <div className="p-6 w-2/3">
        <h2 className="text-2xl text-primary-text font-bold mb-2">{title}</h2>
        <p className="text-secondary mb-4">{desc}</p>
        <button className="bg-primary-text text-primary px-4 py-2">
          {name}
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
