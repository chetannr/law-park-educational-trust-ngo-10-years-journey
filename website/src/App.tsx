import { useEffect, useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SkipToContent } from './components/layout/SkipToContent';
import { Hero } from './components/sections/Hero';
import { ImpactOverview } from './components/sections/ImpactOverview';
import { Timeline } from './components/sections/Timeline';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';
import { Process } from './components/sections/Process';
import { Trustees } from './components/sections/Trustees';
import { CarouselPage } from './components/sections/CarouselPage';
import { loadSlidesData, processSlidesIntoMilestones } from './data/processSlides';
import { loadWebsiteContent, defaultWebsiteContent } from './data/websiteContent';
import type { Slide, Milestone } from './types';

function App() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [stats, setStats] = useState<Array<{ label: string; value: number; suffix?: string }>>([]);
  const [websiteContent, setWebsiteContent] = useState(defaultWebsiteContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const slidesData = await loadSlidesData();
        setSlides(slidesData);
        
        const processedMilestones = processSlidesIntoMilestones(slidesData);
        setMilestones(processedMilestones);
        
        // Use real statistics from website
        const realStats = [
          { label: 'Years of Service', value: 10, suffix: '+' },
          { label: 'Students Supported', value: 200, suffix: '+' },
          { label: 'Villages Reached', value: 50, suffix: '+' },
          { label: 'Donors', value: 100, suffix: '+' },
        ];
        setStats(realStats);

        // Load website content
        const content = await loadWebsiteContent();
        if (content) {
          setWebsiteContent(content);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content">
        <Hero />
        <ImpactOverview stats={stats} />
        <Process process={websiteContent.process} />
        <Timeline milestones={milestones} />
        <Trustees trustees={websiteContent.trustees} />
        <Gallery slides={slides} />
        <Testimonials testimonials={websiteContent.testimonials} />
        <CarouselPage 
          slides={slides}
          milestones={milestones}
          testimonials={websiteContent.testimonials}
          stats={stats}
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
