import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Etcetera Holidays</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-blue-600"
                onMouseEnter={() => setShowHolidays(true)}
                onMouseLeave={() => setShowHolidays(false)}
              >
                Holidays
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {showHolidays && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                  onMouseEnter={() => setShowHolidays(true)}
                  onMouseLeave={() => setShowHolidays(false)}
                >
                  <Link 
                    to="/holidays/international" 
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                  >
                    International
                  </Link>
                  <Link 
                    to="/holidays/domestic" 
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                  >
                    Domestic
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              About Us
            </Link>
            <div className="px-3 py-2">
              <button 
                onClick={() => setShowHolidays(!showHolidays)}
                className="flex items-center text-gray-600"
              >
                Holidays
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {showHolidays && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link 
                    to="/holidays/international" 
                    className="block text-gray-600 hover:text-blue-600"
                  >
                    International
                  </Link>
                  <Link 
                    to="/holidays/domestic" 
                    className="block text-gray-600 hover:text-blue-600"
                  >
                    Domestic
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}