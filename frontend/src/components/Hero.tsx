const Hero = () => {
  return (
    <div className="bg-ocean-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-hotel-400/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sunset-400/30 rounded-full blur-md"></div>
      </div>
      
      <div className="relative pb-16 pt-8">
        <div className="container mx-auto flex flex-col gap-4 px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
            Find your 
            <span className="text-hotel-200 block md:inline md:ml-3">
              next stay
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            Discover amazing hotels at unbeatable prices for your 
            <span className="text-hotel-200 font-semibold"> dream vacation</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="btn-secondary px-8 py-4 text-lg">
              Explore Hotels
            </button>
            <button className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-ocean-700">
              Learn More
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hotel-300 rounded-full"></div>
              <span className="text-sm">1M+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hotel-300 rounded-full"></div>
              <span className="text-sm">10k+ Hotels Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hotel-300 rounded-full"></div>
              <span className="text-sm">Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
