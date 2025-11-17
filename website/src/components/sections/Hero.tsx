import { Button } from '../ui/Button';
import { LazyImage } from '../shared/LazyImage';
import { EducationIllustration, ChildrenIllustration } from '../shared/Illustration';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-gray-900"
    >
      {/* Decorative illustrations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 hidden lg:block">
          <EducationIllustration className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-10 w-64 h-64 hidden lg:block">
          <ChildrenIllustration className="w-full h-full" />
        </div>
      </div>
      
      <div className="relative z-10 container-custom text-center px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <LazyImage
            src={`${import.meta.env.BASE_URL}website_content/images/logo.png`}
            alt="Law Park Educational Trust Logo"
            className="h-24 md:h-32 lg:h-40 w-auto object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display ">
          10 Years of Transforming Lives
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
          Law Park Educational Trust has been empowering children through education,
          scholarships, and community support since 2016.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Explore Our Journey
          </Button>
          <Button variant="outline" size="lg" className="border-gray-900 text-gray-900 hover:bg-gray-100">
            Get Involved
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-900"
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
      </div>
    </section>
  );
}

