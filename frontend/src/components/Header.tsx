import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-ocean-gradient shadow-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/20 to-hotel-900/20"></div>
      <div className="relative py-4 md:py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span className="text-2xl md:text-3xl text-white font-bold tracking-tight">
            <Link 
              to="/" 
              className="gradient-text-hotel bg-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 inline-block"
            >
              MernHolidays.com
            </Link>
          </span>
          <span className="flex space-x-1 md:space-x-2">
            {isLoggedIn ? (
              <>
                <Link
                  className="nav-link text-sm md:text-base flex items-center px-3 py-2 font-semibold hover:bg-white/20 rounded-lg transition-all duration-200"
                  to="/my-bookings"
                >
                  My Bookings
                </Link>
                <Link
                  className="nav-link text-sm md:text-base flex items-center px-3 py-2 font-semibold hover:bg-white/20 rounded-lg transition-all duration-200"
                  to="/my-hotels"
                >
                  My Hotels
                </Link>
                <SignOutButton />
              </>
            ) : (
              <Link
                to="/sign-in"
                className="bg-white text-ocean-700 px-4 py-2 md:px-6 md:py-2 font-bold rounded-lg hover:bg-hotel-50 hover:text-hotel-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                Sign In
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
