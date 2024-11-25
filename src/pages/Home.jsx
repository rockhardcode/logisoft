import { Link } from "react-router-dom";
import image from '../assets/image.png'

function Home() {
  return (
    <main className="relative">
      <div className="relative">
        <img
          src={image}
          alt="Cityscape"
          className="w-full h-[600px] object-cover"
        />
      </div>
      <div
        className="flex justify-center items-center w-full absolute bottom-0 "
        // style={{ backgroundColor: "#1181b2" }}
      >
        <div className="w-4/5 bg-slate-400 flex pt-2 pb-2 px-8 items-center justify-between" style={{ backgroundColor: "#1181b2" }}>
          <nav className="flex space-x-6 items-baseline h-8 ">
            <Link
              to="/property-search"
              className="text-white hover:text-blue-600"
            >
              Property Search
            </Link>
            <Link to="/contact-us" className="text-white hover:text-blue-600">
              Contact Us
            </Link>
          </nav>
          <input
            type="search"
            placeholder="Search"
            className="p-1 rounded-sm text-white placeholder-gray-200"
            style={{ backgroundColor: "#298eba" }}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
