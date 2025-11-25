import { useState, useEffect, useMemo } from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Array of hero background images
  const heroImages = useMemo(() => {
    const baseUrl = import.meta.env.BASE_URL;
    return [
      `${baseUrl}website_content/images/homepage_1.jpeg`,
      `${baseUrl}website_content/images/homepage_2.jpeg`,
      `${baseUrl}website_content/images/homepage_3.jpeg`,
      `${baseUrl}website_content/images/about_1.jpeg`,
      `${baseUrl}website_content/images/about_2.jpeg`,
      `${baseUrl}extracted_content/images/slide_27_Picture_1_00.jpg`,
      `${baseUrl}extracted_content/images/slide_27_Picture_3_02.jpg`,
      `${baseUrl}extracted_content/images/slide_24_Picture_1_00.jpg`,
    ];
  }, []);

  // Preload all images
  useEffect(() => {
    heroImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(index));
      };
      img.onerror = () => {
        console.warn(`Failed to load hero image ${index + 1}: ${src}`);
      };
      img.src = src;
    });
  }, [heroImages]);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    if (loadedImages.size === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [loadedImages.size, heroImages.length]);

  return (
    <section
      id="home"
      className="relative hero-section flex items-center justify-center overflow-hidden"
    >
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex && loadedImages.has(index)
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            loading="eager"
            onError={(e) => {
              console.warn(`Failed to display hero image ${index + 1}`);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Organization Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 font-display leading-tight drop-shadow-lg">
          Law Park Educational Trust
          </h1>

          {/* Main Headline - Gates Foundation Style */}
          
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white/95 drop-shadow-lg">
            Education transforms lives
            </h2>
          </div>
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/95 font-light">
            For over 10 years, Law Park Educational Trust has been empowering children through education,
            scholarships, and community support across 4 South Indian states.
          </p>

          {/* Single CTA Button - Gates Foundation Style */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Journey
            </Button>
          </div>

          {/* Secondary CTA Link */}
          <div className="mt-6">
            <a
              href="#impact"
              className="inline-block text-white/90 hover:text-white underline underline-offset-4 text-lg transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn about our impact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#impact"
          className="block text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

