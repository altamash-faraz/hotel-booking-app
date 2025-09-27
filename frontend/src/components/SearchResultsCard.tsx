import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";
type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="card-hotel grid grid-cols-1 xl:grid-cols-[2fr_3fr] p-6 gap-6 hover:scale-[1.02] transition-all duration-300">
      <div className="w-full h-[300px] relative overflow-hidden rounded-xl group">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          alt={hotel.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr] gap-4">
        <div>
          <div className="flex items-center mb-2">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} className="fill-hotel-400 w-5 h-5" />
              ))}
            </span>
            <span className="ml-2 text-sm font-medium text-luxury-600 bg-luxury-100 px-2 py-1 rounded-full">
              {hotel.type}
            </span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-xl md:text-2xl font-bold text-luxury-800 hover:text-ocean-700 cursor-pointer transition-colors duration-200 block"
          >
            {hotel.name}
          </Link>
        </div>

        <div>
          <div className="line-clamp-4 text-luxury-600 leading-relaxed">
            {hotel.description}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
          <div className="flex flex-wrap gap-2">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span key={index} className="facility-badge">
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="text-sm text-luxury-500 font-medium">
                +{hotel.facilities.length - 3} more
              </span>
            )}
          </div>
          <div className="flex flex-col lg:items-end gap-3">
            <div className="text-right lg:text-right">
              <span className="text-2xl font-bold gradient-text-hotel">
                £{hotel.pricePerNight}
              </span>
              <span className="text-luxury-600 ml-1">per night</span>
            </div>
            <Link
              to={`/detail/${hotel._id}`}
              className="btn-primary text-center lg:max-w-fit px-8 py-3"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
