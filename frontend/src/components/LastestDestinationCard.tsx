import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <div className="h-[300px] relative overflow-hidden">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          alt={hotel.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center mb-2">
          <div className="flex">
            {Array.from({ length: hotel.starRating }).map((_, index) => (
              <AiFillStar key={index} className="fill-hotel-300 w-4 h-4" />
            ))}
          </div>
          <span className="ml-2 text-hotel-200 text-sm font-medium bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {hotel.type}
          </span>
        </div>
        <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-1 group-hover:text-hotel-200 transition-colors">
          {hotel.name}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2 mb-2">
          {hotel.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-hotel-200 font-semibold">
            £{hotel.pricePerNight} per night
          </span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {hotel.city}, {hotel.country}
          </span>
        </div>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-hotel-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 flex items-center justify-center">
        <span className="text-white text-xs">→</span>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
