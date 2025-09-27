import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const handleClear = () => {
    setDestination("");
    setCheckIn(new Date());
    setCheckOut(new Date());
    setAdultCount(1);
    setChildCount(0);
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-4 backdrop-glass border border-white/20 rounded-xl shadow-luxury grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4"
    >
      <div className="flex flex-row items-center flex-1 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-hotel-200 hover:border-hotel-300 transition-all duration-200">
        <MdTravelExplore size={25} className="mr-3 text-hotel-600" />
        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none bg-transparent placeholder-luxury-500"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-hotel-200 hover:border-hotel-300 transition-all duration-200">
        <div className="flex gap-4">
          <label className="flex flex-col">
            <span className="text-xs text-luxury-600 mb-1 font-medium">Adults</span>
            <input
              className="w-16 px-2 py-1 focus:outline-none font-semibold bg-transparent border-b border-luxury-300 focus:border-hotel-500 transition-colors"
              type="number"
              min={1}
              max={20}
              value={adultCount}
              onChange={(event) => setAdultCount(parseInt(event.target.value))}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-xs text-luxury-600 mb-1 font-medium">Children</span>
            <input
              className="w-16 px-2 py-1 focus:outline-none font-semibold bg-transparent border-b border-luxury-300 focus:border-hotel-500 transition-colors"
              type="number"
              min={0}
              max={20}
              value={childCount}
              onChange={(event) => setChildCount(parseInt(event.target.value))}
            />
          </label>
        </div>
      </div>

      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="w-full bg-white/90 backdrop-blur-sm p-3 focus:outline-none rounded-lg shadow-sm border border-hotel-200 hover:border-hotel-300 focus:border-hotel-400 transition-all duration-200"
          wrapperClassName="w-full"
        />
      </div>
      
      <div>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="w-full bg-white/90 backdrop-blur-sm p-3 focus:outline-none rounded-lg shadow-sm border border-hotel-200 hover:border-hotel-300 focus:border-hotel-400 transition-all duration-200"
          wrapperClassName="w-full"
        />
      </div>

      <div className="flex gap-2 col-span-1 md:col-span-2 lg:col-span-1 2xl:col-span-1">
        <button 
          type="submit"
          className="flex-1 btn-primary py-3 text-sm md:text-base font-semibold"
        >
          Search Hotels
        </button>
        <button 
          type="button"
          onClick={handleClear}
          className="px-4 py-3 bg-luxury-200 text-luxury-700 rounded-lg font-semibold hover:bg-luxury-300 transition-all duration-200 text-sm"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
