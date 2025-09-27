type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div className="card p-4">
      <h4 className="text-lg font-semibold mb-4 text-luxury-800 border-b border-hotel-200 pb-2">
        Max Price per Night
      </h4>
      <select
        className="input-hotel"
        value={selectedPrice}
        onChange={(event) =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined
          )
        }
      >
        <option value="">Select Max Price</option>
        {[50, 100, 200, 300, 500].map((price) => (
          <option key={price} value={price} className="text-luxury-700">
            £{price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
