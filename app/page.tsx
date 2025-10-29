'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="text-3xl font-bold text-gradient hover:scale-105 transition-transform">
              達磨 DARUMA
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-red-600 transition font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#products" className="text-gray-700 hover:text-red-600 transition font-medium relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition font-medium relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <a href="#products" className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold">
              Shop Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-white pattern-dots relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                ✨ Traditional Japanese Craftsmanship
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Make Your Wishes Come True with
                <span className="text-gradient block mt-2">Japanese Daruma</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the ancient Japanese tradition of wish-making dolls.
                Each handcrafted Daruma brings hope, perseverance, and good fortune to your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all text-center relative overflow-hidden">
                  <span className="relative z-10">Explore Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a href="#about" className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full text-lg font-semibold hover:border-red-600 hover:text-red-600 hover:shadow-xl hover:scale-105 transition-all text-center bg-white">
                  Learn More
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Years of Tradition</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">★ 4.9</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative w-full h-96 bg-gradient-to-br from-red-200 via-orange-200 to-red-100 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-2 transition-transform duration-500 border-4 border-white">
                <div className="text-9xl animate-float">🎯</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Verified Quality</div>
                    <div className="text-sm text-gray-600">Handcrafted in Japan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Daruma Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pattern-grid opacity-50"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 rounded-full text-sm font-semibold">
              🎎 Cultural Heritage
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What is <span className="text-gradient">Daruma</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A symbol of perseverance and good luck rooted in Japanese culture for over 300 years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-10 rounded-3xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-red-200 hover:-translate-y-2">
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">🏯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-colors">Rich History</h3>
              <p className="text-gray-600 leading-relaxed">
                Inspired by Bodhidharma, the founder of Zen Buddhism, Daruma dolls have been
                cherished in Japan since the 18th century.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="group text-center p-10 rounded-3xl bg-gradient-to-br from-white to-orange-50 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200 hover:-translate-y-2" style={{transitionDelay: '0.1s'}}>
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-colors">Eye Painting Ritual</h3>
              <p className="text-gray-600 leading-relaxed">
                Paint one eye when you make a wish, and the second eye when your wish comes true.
                A powerful symbol of goal achievement.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="group text-center p-10 rounded-3xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-red-200 hover:-translate-y-2" style={{transitionDelay: '0.2s'}}>
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-colors">Handcrafted Art</h3>
              <p className="text-gray-600 leading-relaxed">
                Each Daruma is carefully handmade by skilled artisans using traditional techniques
                passed down through generations.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 rounded-full text-sm font-semibold">
              🛍️ Premium Collection
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Collection</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose your perfect Daruma companion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Classic Red Daruma', price: '$45', size: 'Medium (15cm)', emoji: '🔴', bg: 'from-red-100 to-red-50', tag: 'Bestseller' },
              { name: 'Gold Fortune Daruma', price: '$65', size: 'Large (20cm)', emoji: '🟡', bg: 'from-yellow-100 to-orange-50', tag: 'Premium' },
              { name: 'White Peace Daruma', price: '$35', size: 'Small (10cm)', emoji: '⚪', bg: 'from-gray-100 to-gray-50', tag: 'Classic' }
            ].map((product, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-red-200 hover:-translate-y-3">
                <div className="relative">
                  <div className={`h-80 bg-gradient-to-br ${product.bg} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-red-600 shadow-lg">
                      {product.tag}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                    <div className="text-9xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{product.emoji}</div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gradient transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mb-6 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                    {product.size}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Starting at</div>
                      <span className="text-4xl font-bold text-gradient">{product.price}</span>
                    </div>
                    <button
                      onClick={() => alert(`Added ${product.name} to cart! (Cart functionality coming soon)`)}
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-110 transition-all font-semibold group-hover:from-red-700 group-hover:to-orange-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
              <div className="text-5xl">🎁</div>
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900 mb-1">Free Gift Wrapping</div>
                <div className="text-gray-600">Beautiful traditional packaging included with every order</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 rounded-full text-sm font-semibold">
              📖 Step by Step Guide
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How to Use Your <span className="text-gradient">Daruma</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow the traditional ritual to make your wishes come true
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-orange-200 to-red-200 -z-10"></div>

            {[
              { step: '1', title: 'Make a Wish', desc: 'Think of a goal or wish you want to achieve', emoji: '💭', color: 'from-red-500 to-red-600' },
              { step: '2', title: 'Paint Left Eye', desc: 'Fill in the left eye while focusing on your intention', emoji: '🖌️', color: 'from-orange-500 to-red-600' },
              { step: '3', title: 'Display Prominently', desc: 'Place your Daruma where you\'ll see it daily', emoji: '🏠', color: 'from-red-500 to-orange-600' },
              { step: '4', title: 'Paint Right Eye', desc: 'When your wish comes true, paint the second eye in celebration', emoji: '✨', color: 'from-orange-500 to-yellow-500' }
            ].map((item, index) => (
              <div key={item.step} className="group text-center relative">
                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10`}>
                  {item.step}
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-red-200 group-hover:-translate-y-2">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#products" className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
              Get Your Daruma Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 animate-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
            🌟 Limited Time Offer
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Start Your Journey to<br />
            <span className="inline-block mt-2">Success Today</span>
          </h2>
          <p className="text-xl md:text-2xl text-red-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of people worldwide who have achieved their dreams with Daruma
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#products" className="group inline-block bg-white text-red-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-red-50 hover:scale-110 transition-all shadow-2xl relative overflow-hidden">
              <span className="relative z-10">Shop Daruma Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#about" className="inline-block border-3 border-white text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-red-600 transition-all shadow-xl">
              Learn More
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Authentic Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-4">達磨 DARUMA</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Bringing Japanese tradition and good fortune to the world.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-xl">in</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Shop</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#products" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">All Products</a></li>
                <li><a href="#products" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Best Sellers</a></li>
                <li><a href="#products" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">New Arrivals</a></li>
                <li><a href="#products" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Gift Sets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">About</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Our Story</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Artisans</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Sustainability</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Contact Us</a></li>
                <li><a href="#how-it-works" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Shipping Info</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">Returns</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors hover:translate-x-1 inline-block">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 Daruma Shop. All rights reserved.
              </p>
              <p className="text-gray-400 text-center md:text-right">
                Made with <span className="text-red-500 inline-block animate-pulse">❤️</span> for dreamers worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
