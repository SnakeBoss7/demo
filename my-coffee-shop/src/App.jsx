import { useState } from 'react';
import { BookOpen, MapPin, Clock, Phone, Instagram, Facebook, Twitter, ShoppingCart, Star, PlayCircle, Users, Award, TrendingUp } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const courses = [
    { id: 1, name: 'Web Development Bootcamp', price: 99.99, category: 'Development', rating: 4.8, students: 12543, duration: '40 hours' },
    { id: 2, name: 'React & Next.js Masterclass', price: 89.99, category: 'Development', rating: 4.9, students: 8932, duration: '35 hours' },
    { id: 3, name: 'Python for Data Science', price: 79.99, category: 'Data Science', rating: 4.7, students: 15234, duration: '30 hours' },
    { id: 4, name: 'Machine Learning A-Z', price: 109.99, category: 'Data Science', rating: 4.6, students: 9821, duration: '45 hours' },
    { id: 5, name: 'Digital Marketing Masterclass', price: 69.99, category: 'Marketing', rating: 4.8, students: 11234, duration: '25 hours' },
    { id: 6, name: 'SEO & Content Strategy', price: 59.99, category: 'Marketing', rating: 4.9, students: 7654, duration: '20 hours' },
    { id: 7, name: 'UI/UX Design Fundamentals', price: 74.99, category: 'Design', rating: 4.7, students: 6543, duration: '28 hours' },
    { id: 8, name: 'Graphic Design Pro', price: 64.99, category: 'Design', rating: 4.5, students: 5432, duration: '22 hours' },
    { id: 9, name: 'Business Strategy & Analytics', price: 84.99, category: 'Business', rating: 4.6, students: 8765, duration: '32 hours' },
    { id: 10, name: 'Financial Analysis & Modeling', price: 94.99, category: 'Business', rating: 4.9, students: 4321, duration: '38 hours' },
  ];

  const categories = ['All', 'Development', 'Data Science', 'Marketing', 'Design', 'Business'];

  const filteredItems = selectedCategory === 'All' 
    ? courses 
    : courses.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white sticky top-0 z-50 shadow-2xl backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <BookOpen className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-3xl font-bold tracking-tight">LearnHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-purple-300 transition-all duration-300 font-medium">Home</a>
              <a href="#courses" className="hover:text-purple-300 transition-all duration-300 font-medium">Courses</a>
              <a href="#about" className="hover:text-purple-300 transition-all duration-300 font-medium">About</a>
              <a href="#contact" className="hover:text-purple-300 transition-all duration-300 font-medium">Contact</a>
              <div className="relative">
                <ShoppingCart className="w-6 h-6 hover:text-purple-300 cursor-pointer transition-colors" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32 md:py-40 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Transform Your Career
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              With Expert-Led Courses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Learn from industry professionals and master in-demand skills
          </p>
          <button className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50">
            Browse Courses
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">50K+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-900 mb-2">200+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-900 mb-2">500+</div>
              <div className="text-gray-600">Online Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-indigo-900 mb-4">Popular Courses</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-xl shadow-indigo-900/30'
                    : 'bg-white text-indigo-900 hover:bg-purple-50 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-48 flex items-center justify-center relative">
                  <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-indigo-900">{course.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-indigo-900 group-hover:text-purple-700 transition-colors mb-2">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{course.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <p className="text-3xl font-bold text-indigo-700">${course.price}</p>
                    <button
                      onClick={() => addToCart(course)}
                      className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-6 py-2 rounded-full font-semibold hover:from-indigo-800 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      Enroll
                    </button>
                  </div>
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
              <h2 className="text-5xl font-bold text-indigo-900 mb-6">Why Choose LearnHub?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">Expert Instructors</h3>
                    <p className="text-gray-700">Learn from industry professionals with real-world experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">Lifetime Access</h3>
                    <p className="text-gray-700">Learn at your own pace with unlimited access to course materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-500 to-indigo-500 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">Career Growth</h3>
                    <p className="text-gray-700">Get certificates and skills that employers are looking for</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-300 rounded-3xl h-96 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <BookOpen className="w-48 h-48 text-indigo-900 opacity-30" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl w-32 h-32 flex items-center justify-center shadow-xl">
                <span className="text-white text-center">
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-xs">Success Rate</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-indigo-100 to-purple-100 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-indigo-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-indigo-900">Location</h3>
              <p className="text-gray-600 leading-relaxed">456 Education Lane<br />Tech Valley, CA 94102</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-indigo-900">Support Hours</h3>
              <p className="text-gray-600 leading-relaxed">Mon-Fri: 9am - 6pm<br />Sat-Sun: 10am - 4pm</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-pink-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-indigo-900">Contact</h3>
              <p className="text-gray-600 leading-relaxed">(555) 987-6543<br />support@learnhub.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <BookOpen className="w-8 h-8" />
              <span className="text-2xl font-bold">LearnHub</span>
            </div>
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Instagram className="w-7 h-7 hover:text-purple-300 cursor-pointer transition-all duration-300 transform hover:scale-110" />
              <Facebook className="w-7 h-7 hover:text-purple-300 cursor-pointer transition-all duration-300 transform hover:scale-110" />
              <Twitter className="w-7 h-7 hover:text-purple-300 cursor-pointer transition-all duration-300 transform hover:scale-110" />
            </div>
            <p className="text-sm text-purple-200">© 2025 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;