import { useState } from 'react';
import { Coffee, MapPin, Clock, Phone, Instagram, Facebook, Twitter, ShoppingCart, Star } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Espresso', price: 3.50, category: 'Hot Coffee', rating: 4.8 },
    { id: 2, name: 'Cappuccino', price: 4.50, category: 'Hot Coffee', rating: 4.9 },
    { id: 3, name: 'Latte', price: 4.75, category: 'Hot Coffee', rating: 4.7 },
    { id: 4, name: 'Americano', price: 3.75, category: 'Hot Coffee', rating: 4.6 },
    { id: 5, name: 'Iced Coffee', price: 4.00, category: 'Cold Coffee', rating: 4.8 },
    { id: 6, name: 'Cold Brew', price: 4.50, category: 'Cold Coffee', rating: 4.9 },
    { id: 7, name: 'Frappuccino', price: 5.50, category: 'Cold Coffee', rating: 4.7 },
    { id: 8, name: 'Croissant', price: 3.50, category: 'Pastries', rating: 4.5 },
    { id: 9, name: 'Blueberry Muffin', price: 3.00, category: 'Pastries', rating: 4.6 },
    { id: 10, name: 'Chocolate Cake', price: 4.50, category: 'Pastries', rating: 4.9 },
  ];

  const categories = ['All', 'Hot Coffee', 'Cold Coffee', 'Pastries'];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white sticky top-0 z-50 shadow-2xl backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Coffee className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-3xl font-bold tracking-tight">Brew Haven</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-amber-300 transition-all duration-300 font-medium">Home</a>
              <a href="#menu" className="hover:text-amber-300 transition-all duration-300 font-medium">Menu</a>
              <a href="#about" className="hover:text-amber-300 transition-all duration-300 font-medium">About</a>
              <a href="#contact" className="hover:text-amber-300 transition-all duration-300 font-medium">Contact</a>
              <div className="relative">
                <ShoppingCart className="w-6 h-6 hover:text-amber-300 cursor-pointer transition-colors" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32 md:py-40 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Your Daily Dose of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
              Perfection
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Handcrafted coffee & artisan pastries, made with love
          </p>
          <button className="bg-white text-amber-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50">
            Order Now
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-900 to-orange-900 text-white shadow-xl shadow-amber-900/30'
                    : 'bg-white text-amber-900 hover:bg-amber-50 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 group-hover:text-orange-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.category}</p>
                  </div>
                  <Coffee className="w-6 h-6 text-amber-600 group-hover:rotate-12 transition-transform" />
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-gray-700 ml-1">{item.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold text-amber-700">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gradient-to-r from-amber-900 to-orange-900 text-white px-5 py-2 rounded-full font-semibold hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-amber-900 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-8"></div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                At Brew Haven, we believe every cup tells a story. Since 2015, we've been sourcing 
                the finest beans from around the world and roasting them to perfection right here 
                in our shop.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our passionate baristas craft each drink with care, ensuring every visit is 
                a memorable experience. Come join us for your daily ritual.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 rounded-3xl h-96 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Coffee className="w-48 h-48 text-amber-900 opacity-30" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl w-32 h-32 flex items-center justify-center shadow-xl">
                <span className="text-white text-4xl font-bold">10+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-amber-100 to-orange-100 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-amber-900">Location</h3>
              <p className="text-gray-600 leading-relaxed">123 Coffee Street<br />Downtown, CA 90210</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-amber-900">Hours</h3>
              <p className="text-gray-600 leading-relaxed">Mon-Fri: 7am - 7pm<br />Sat-Sun: 8am - 8pm</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-amber-900">Contact</h3>
              <p className="text-gray-600 leading-relaxed">(555) 123-4567<br />hello@brewhaven.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Coffee className="w-8 h-8" />
              <span className="text-2xl font-bold">Brew Haven</span>
            </div>
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Instagram className="w-7 h-7 hover:text-amber-300 cursor-pointer transition-all duration-300 transform hover:scale-110" />
              <Facebook className="w-7 h-7 hover:text-amber-300 cursor-pointer transition-all duration-300 transform hover:scale-110" />
              <Twitter className="w-7 h-7 hover:text-amber-300 cursor-pointer transition-all duration-300 transform hover:scale-110" />
            </div>
            <p className="text-sm text-amber-200">© 2025 Brew Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;