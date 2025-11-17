import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { LazyImage } from '../shared/LazyImage';
import { Card } from '../ui/Card';
import type { Slide, Milestone } from '../../types';
import type { Testimonial } from '../../data/websiteContent';

interface CarouselPageProps {
  slides: Slide[];
  milestones: Milestone[];
  testimonials: Testimonial[];
  stats: Array<{ label: string; value: number; suffix?: string }>;
}

export function CarouselPage({ slides, milestones, testimonials, stats }: CarouselPageProps) {

  // Get all images from slides
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

  return (
    <section id="carousel" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey in Motion
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Explore our impact through interactive carousels showcasing our work, testimonials, and milestones.
          </p>
        </div>

        {/* Image Gallery Carousel */}
        {allImages.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Photo Gallery</h3>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={allImages.length > 3}
              className="h-[400px] md:h-[500px]"
            >
              {allImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Card hover className="h-full overflow-hidden">
                    <div className="relative h-full">
                      <LazyImage
                        src={image.path}
                        alt={image.slideTitle || `Gallery Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h4 className="text-white font-semibold text-lg mb-1">
                          {image.slideTitle || 'Our Work'}
                        </h4>
                        {image.slideText && (
                          <p className="text-white/90 text-sm line-clamp-2">
                            {image.slideText.substring(0, 100)}...
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Testimonials Carousel */}
        {testimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">What People Say</h3>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              className="h-auto"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card hover className="h-full p-6">
                    <div className="mb-4">
                      <svg
                        className="w-12 h-12 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="mb-4 italic text-gray-700 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Milestones Carousel */}
        {milestones.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Timeline Highlights</h3>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              className="h-auto"
            >
              {milestones.map((milestone, index) => (
                <SwiperSlide key={index}>
                  <Card hover className="h-full p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-600">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {milestone.description}
                        </p>
                        {milestone.location && (
                          <p className="text-sm text-gray-500">
                            📍 {milestone.location}
                          </p>
                        )}
                        {milestone.images.length > 0 && (
                          <div className="mt-4 grid grid-cols-3 gap-2">
                            {milestone.images.slice(0, 3).map((image, imgIndex) => (
                              <LazyImage
                                key={imgIndex}
                                src={`${import.meta.env.BASE_URL}extracted_content/${image.path}`}
                                alt={`${milestone.year} - Image ${imgIndex + 1}`}
                                className="w-full h-20 object-cover rounded"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Statistics Carousel */}
        {stats.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={stats.length > 4}
              className="h-auto"
            >
              {stats.map((stat, index) => (
                <SwiperSlide key={index}>
                  <Card hover className="h-full p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}

