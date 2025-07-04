import React from 'react';
import { Download, Facebook, Instagram, MessageCircle, Linkedin, Plus, Circle } from 'lucide-react';

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <span className="text-white">Andh</span>
          <span className="text-blue-400">ikaW</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="/Project" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Project</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Blog</a>
        </div>
        
        <button className="border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-all">
          Contact Me
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg text-gray-300">Halo Perkenalkan, Saya</h2>
              <h1 className="text-5xl font-bold leading-tight">
                <span className="text-purple-500">Andhika Wahyu Agustian</span>
              </h1>
              <p className="text-gray-400 text-lg">Mobile Development Enthusiast</p>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-lg">
             Saya adalah Fresh Graduate yang memiliki ketertarikan besar di bidang pengembangan aplikasi mobile. Saat ini saya fokus mempelajari dan mengembangkan aplikasi menggunakan Flutter dan Firebase. Saya memiliki semangat belajar yang tinggi dan sedang mencari peluang kerja untuk dapat berkembang di industri mobile development.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded flex items-center gap-2 text-base hover:bg-blue-600 transition-colors">
                <Download size={20} />
                Download CV
              </button>
              <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded text-base hover:border-gray-400 transition-colors">
                More
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center relative">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 -top-4 -right-4"></div>
              
              {/* Profile Image Container */}
              <div className="relative z-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-1">
                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 text-purple-500">
                <Plus size={24} />
              </div>
              <div className="absolute bottom-12 left-8 text-blue-400">
                <Circle size={20} />
              </div>
              <div className="absolute top-1/2 right-12 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">What I do I Offer</h2>
        <h1 className="text-4xl font-bold mb-16 text-white">
          Creates Professional Design That's<br />Oriented Towards Client Needs
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Service Card 1 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl">
              🎨
            </div>
            <h3 className="text-xl text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-400 leading-relaxed">
              Creating intuitive and visually appealing user interfaces that enhance user experience
            </p>
          </div>
          
          {/* Service Card 2 - Highlighted */}
          <div className="bg-purple-500 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer transform scale-105">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl">
              📱
            </div>
            <h3 className="text-xl text-white mb-4">Mobile App Design</h3>
            <p className="text-white text-opacity-80 leading-relaxed">
              Designing mobile applications that are both functional and aesthetically pleasing
            </p>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl">
              💻
            </div>
            <h3 className="text-xl text-white mb-4">Web Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Building responsive and modern websites with clean code and optimal performance
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">05</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          
          {/* Stat Card 2 - Highlighted */}
          <div className="bg-purple-500 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">03</div>
            <div className="text-white text-opacity-80 text-sm">Complete Project</div>
          </div>
          
          {/* Stat Card 3 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">4.5</div>
            <div className="text-gray-400 text-sm">Customer Review</div>
          </div>
          
          {/* Stat Card 4 */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">06</div>
            <div className="text-gray-400 text-sm">Awards Achievement</div>
          </div>
        </div>
      </div>

      {/* Latest Projects Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Project</h2>
          <p className="text-gray-400 text-lg">
            Here are some of my recent works that showcase my design skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-5xl">
              📱
            </div>
            <div className="p-6">
              <h3 className="text-xl text-white mb-3">E-Commerce Mobile App</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                A modern e-commerce app with intuitive design and smooth user experience
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">UI/UX</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Mobile</span>
              </div>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-5xl">
              💻
            </div>
            <div className="p-6">
              <h3 className="text-xl text-white mb-3">Dashboard Design</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Clean and functional dashboard interface for data visualization
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Web</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Dashboard</span>
              </div>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-5xl">
              🎨
            </div>
            <div className="p-6">
              <h3 className="text-xl text-white mb-3">Brand Identity</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Complete brand identity design including logo and visual guidelines
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Branding</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Logo</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project List Section */}
        <div className="mt-24">
          <div className="flex flex-col gap-6">
            {/* Project Item 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center gap-6 hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="w-20 h-20 bg-green-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                🛒
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-2">DauiLang Mobile Apps</h3>
                <p className="text-gray-400 text-sm">E-commerce mobile application with modern design</p>
              </div>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                View Details
              </button>
            </div>
            
            {/* Project Item 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center gap-6 hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                🔧
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-2">Ada Mekanik Mobile Apps</h3>
                <p className="text-gray-400 text-sm">On-demand mechanic service mobile application</p>
              </div>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                View Details
              </button>
            </div>
            
            {/* Project Item 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center gap-6 hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="w-20 h-20 bg-yellow-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                📱
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-2">InDorse Mobile Apps</h3>
                <p className="text-gray-400 text-sm">Social networking mobile application design</p>
              </div>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12 text-center mt-12">
            <h3 className="text-2xl text-white mb-4">Have any project in mind?</h3>
            <p className="text-gray-400 mb-8 text-base">
              I'm available for freelance projects and would love to work on your next big idea
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-transparent border border-gray-600 text-gray-300 px-6 py-3 rounded-lg text-base hover:border-gray-400 transition-colors">
                More Projects
              </button>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-lg text-base hover:bg-purple-600 transition-colors">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Hire Me Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Why Hire Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              💼
            </div>
            <h3 className="text-xl text-white mb-4">Workaholic</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I am a type of person who puts work above everything else. I always try to complete my work on time and with the best quality.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              💬
            </div>
            <h3 className="text-xl text-white mb-4">Communicative</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I have a talent for communicating with clients and team members. I always try to understand their needs and provide solutions.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🏆
            </div>
            <h3 className="text-xl text-white mb-4">Cooperative</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I believe that teamwork is the key to success. I always try to work together with my team to achieve the best results.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              ⚡
            </div>
            <h3 className="text-xl text-white mb-4">Perfectionist</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I have a strong desire to create perfect work. I always pay attention to details and try to deliver the best quality.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Testimonials</h2>
        <h1 className="text-4xl font-bold text-white mb-16">What Do They Say About Me</h1>
        
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12 max-w-4xl mx-auto relative">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-3xl flex-shrink-0">
              👨‍💼
            </div>
            <div className="text-left">
              <h3 className="text-xl text-white mb-1">Iqbal Horibin</h3>
              <p className="text-gray-400 text-sm">Project Manager Gojek</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
            "Dimas showed very good design insight and worked with me to fix all the issues that have been faced. Recommended if you need someone to make your application have a good user experience."
          </p>
          
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-10 h-1 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-1 bg-gray-700 rounded-full"></div>
            <div className="w-3 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Tools and Skills Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Tools and Skills</h2>
        
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Adobe Photoshop */}
          <div className="w-20 h-20 bg-blue-900 rounded-2xl flex items-center justify-center text-2xl font-bold text-blue-400 border border-gray-700 hover:transform hover:scale-110 transition-all cursor-pointer">
            Ps
          </div>
          
          {/* Figma */}
          <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center text-2xl font-bold text-orange-500 border border-gray-700 hover:transform hover:scale-110 transition-all cursor-pointer">
            F
          </div>
          
          {/* HTML5 */}
          <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center text-xs font-bold text-white border border-gray-700 hover:transform hover:scale-110 transition-all cursor-pointer">
            HTML5
          </div>
          
          {/* CSS3 */}
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-xs font-bold text-white border border-gray-700 hover:transform hover:scale-110 transition-all cursor-pointer">
            CSS3
          </div>
          
          {/* JavaScript */}
          <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center text-xs font-bold text-black border border-gray-700 hover:transform hover:scale-110 transition-all cursor-pointer">
            JS
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 pb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12 text-center relative overflow-hidden">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-xl">
                📞
              </div>
              <div>
                <h3 className="text-base text-white mb-1">Phone</h3>
                <p className="text-gray-400 text-sm">+6285 234 567 890</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-xl">
                ✉️
              </div>
              <div>
                <h3 className="text-base text-white mb-1">Email</h3>
                <p className="text-gray-400 text-sm">dimas@sarrcreative.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-xl">
                📍
              </div>
              <div>
                <h3 className="text-base text-white mb-1">Location</h3>
                <p className="text-gray-400 text-sm">Surabaya, East Java, Indonesia</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="absolute top-5 right-5 w-24 h-24 border-2 border-gray-700 rounded-full opacity-30"></div>
        </div>
      </div>

      {/* Social Media Footer */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col gap-4">
          <span className="text-sm text-gray-400 mb-2">Find Me On</span>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-700 rounded flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white hover:bg-green-500 transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}