import { useState } from 'react';
import type { Milestone } from '../../types';
import { LazyImage } from '../shared/LazyImage';
import { Card } from '../ui/Card';

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  return (
    <section id="journey" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey Through the Years
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            A decade of dedication, growth, and transformative impact in education.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2" />
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-primary-200" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isExpanded = expandedYear === milestone.year;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className="relative flex items-start md:items-center"
                >
                  {/* Year Marker */}
                  <div
                    className={`absolute left-0 md:left-1/2 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg transform md:-translate-x-1/2 z-10 cursor-pointer hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2`}
                    onClick={() =>
                      setExpandedYear(isExpanded ? null : milestone.year)
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setExpandedYear(isExpanded ? null : milestone.year);
                      }
                    }}
                    aria-label={`Toggle details for ${milestone.year}`}
                    aria-expanded={isExpanded}
                  >
                    {milestone.year}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-24 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <Card hover className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      {milestone.location && (
                        <p className="text-sm text-primary-600 mb-3">
                          📍 {milestone.location}
                        </p>
                      )}
                      <p className="mb-4 whitespace-pre-line">
                        {milestone.description.substring(0, 200)}
                        {milestone.description.length > 200 && !isExpanded && '...'}
                        {isExpanded && milestone.description.substring(200)}
                      </p>

                      {milestone.description.length > 200 && (
                        <button
                          onClick={() =>
                            setExpandedYear(isExpanded ? null : milestone.year)
                          }
                          className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                        >
                          {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                      )}

                      {milestone.images.length > 0 && (
                        <div className="mt-4">
                          <div
                            className={`grid gap-2 ${
                              milestone.images.length === 1
                                ? 'grid-cols-1'
                                : milestone.images.length === 2
                                ? 'grid-cols-2'
                                : 'grid-cols-3'
                            }`}
                          >
                            {milestone.images.slice(0, 3).map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative aspect-square rounded-lg overflow-hidden"
                              >
                                <LazyImage
                                  src={`${import.meta.env.BASE_URL}extracted_content/${image.path}`}
                                  alt={`${milestone.year} - Image ${imgIndex + 1}`}
                                  className="w-full h-full"
                                />
                              </div>
                            ))}
                          </div>
                          {milestone.images.length > 3 && (
                            <p className="text-sm text-gray-500 mt-2">
                              +{milestone.images.length - 3} more images
                            </p>
                          )}
                        </div>
                      )}
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

