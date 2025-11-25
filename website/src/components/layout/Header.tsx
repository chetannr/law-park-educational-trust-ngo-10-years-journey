import { useState } from 'react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}website_content/images/logo.png`}
                alt="Law Park Educational Trust Logo"
                className="h-10 md:h-12 w-auto object-contain"
                loading="eager"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
            >
              Home
            </a>
            <a 
              href="#journey" 
              className="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
            >
              Our Journey
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
            >
              Gallery
            </a>
            <a 
              href="#impact" 
              className="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
            >
              Impact
            </a>
            <a 
              href="#carousel" 
              className="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
            >
              Carousel
            </a>
            <Button variant="primary" size="sm">
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#journey"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Journey
            </a>
            <a
              href="#gallery"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#impact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </a>
            <a
              href="#carousel"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Carousel
            </a>
            <div className="px-4 pt-2">
              <Button variant="primary" size="sm" className="w-full">
                Get Involved
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

