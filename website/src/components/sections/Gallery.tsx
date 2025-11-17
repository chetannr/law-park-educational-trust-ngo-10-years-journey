import { useState } from 'react';
import type { Slide } from '../../types';
import { LazyImage } from '../shared/LazyImage';

interface GalleryProps {
  slides: Slide[];
}

export function Gallery({ slides }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Extract all images from slides
  const allImages = slides
    .filter((slide) => slide.images.length > 0)
    .flatMap((slide) =>
      slide.images.map((img) => ({
        ...img,
        slideTitle: slide.title,
        slideText: slide.all_text,
        path: `${import.meta.env.BASE_URL}extracted_content/${img.path}`,
      }))
    );

  // Filter images (could be enhanced with year/location filters)
  const filteredImages =
    filter === 'all'
      ? allImages
      : allImages.filter((img) => img.slideText.includes(filter));

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Moments That Matter
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Capturing the joy, hope, and transformation in every program we conduct.
          </p>
        </div>

        {/* Filter (simplified - can be enhanced) */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg mr-2 transition-colors ${
              filter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.filename}-${index}`}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() =>
                setSelectedImage({
                  src: image.path,
                  alt: image.slideTitle || 'Gallery image',
                })
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage({
                    src: image.path,
                    alt: image.slideTitle || 'Gallery image',
                  });
                }
              }}
            >
              <LazyImage
                src={image.path}
                alt={image.slideTitle || 'Gallery image'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close lightbox"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

