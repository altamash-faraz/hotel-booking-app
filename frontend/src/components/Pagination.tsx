export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8">
      <ul className="flex gap-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button 
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                page === number 
                  ? "btn-primary" 
                  : "bg-white text-luxury-700 border border-luxury-300 hover:border-hotel-400 hover:bg-hotel-50 hover:text-hotel-700 shadow-sm hover:shadow-md"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
