const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-luxury-800 to-luxury-900 mt-auto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl md:text-3xl font-bold tracking-tight mb-4 block">
              <span className="gradient-text-hotel bg-gradient-to-r from-hotel-300 to-ocean-300 bg-clip-text text-transparent">
                MernHolidays.com
              </span>
            </span>
            <p className="text-luxury-300 text-sm md:text-base mb-4 max-w-md">
              Your trusted partner in finding the perfect accommodations worldwide. 
              Experience luxury, comfort, and unforgettable memories.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-hotel-500 rounded-full flex items-center justify-center hover:bg-hotel-400 transition-colors cursor-pointer">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center hover:bg-ocean-400 transition-colors cursor-pointer">
                <span className="text-white text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-sunset-500 rounded-full flex items-center justify-center hover:bg-sunset-400 transition-colors cursor-pointer">
                <span className="text-white text-sm">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">Safety</a></li>
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">Cancellation</a></li>
              <li><a href="#" className="text-luxury-300 hover:text-hotel-300 transition-colors text-sm">Reviews</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-700 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-luxury-400 text-sm">
            © 2025 MernHolidays.com. All rights reserved.
          </span>
          <span className="flex gap-6 text-sm">
            <a href="#" className="text-luxury-400 hover:text-hotel-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-luxury-400 hover:text-hotel-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-luxury-400 hover:text-hotel-300 transition-colors">Cookie Policy</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
