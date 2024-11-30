import PropTypes from "prop-types";

function Award({ title, name, desc, pic }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg overflow-hidden max-w-3xl mx-auto border border-gray-200">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <img src={pic} alt="Card" className="w-full h-full object-cover" />
      </div>
      {/* Text Section */}
      <div className="p-6 md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{desc}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
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
