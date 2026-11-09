import { Link } from "react-router-dom";
import { heroImage } from "../Utils/helpers";

// Big banner on top of the Home and Photos page
function Hero({ showButton }) {
  return (
    <div
      className="h-64 bg-slate-700 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("${heroImage}")`,
      }}
    >
      <div className="max-w-6xl w-full mx-auto px-4 text-white">
        {showButton && (
          <p className="text-sm tracking-widest mb-2">WELCOME TO PHOTOHUB</p>
        )}
        <h1 className="text-4xl font-bold">Discover Beautiful Moments</h1>
        <p className="mt-2">Explore thousands of photos from different albums.</p>

        {showButton && (
          <Link
            to="/photos"
            className="inline-block mt-5 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Explore Photos &gt;
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hero;
