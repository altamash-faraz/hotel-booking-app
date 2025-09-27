import { AiFillStar } from "react-icons/ai";

type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="card p-4">
      <h4 className="text-lg font-semibold mb-4 text-luxury-800 border-b border-hotel-200 pb-2">
        Property Rating
      </h4>
      <div className="space-y-3">
        {["5", "4", "3", "2", "1"].map((star) => (
          <label 
            key={star}
            className="flex items-center space-x-3 cursor-pointer group hover:bg-hotel-50 p-2 rounded-lg transition-colors duration-200"
          >
            <input
              type="checkbox"
              className="rounded border-hotel-300 text-hotel-500 focus:ring-hotel-400 w-4 h-4"
              value={star}
              checked={selectedStars.includes(star)}
              onChange={onChange}
            />
            <div className="flex items-center space-x-1">
              <div className="flex">
                {Array.from({ length: parseInt(star) }).map((_, index) => (
                  <AiFillStar key={index} className="fill-hotel-400 w-4 h-4" />
                ))}
                {Array.from({ length: 5 - parseInt(star) }).map((_, index) => (
                  <AiFillStar key={index} className="fill-luxury-300 w-4 h-4" />
                ))}
              </div>
              <span className="text-luxury-700 group-hover:text-hotel-700 transition-colors font-medium">
                {star} {parseInt(star) === 1 ? 'Star' : 'Stars'}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StarRatingFilter;
