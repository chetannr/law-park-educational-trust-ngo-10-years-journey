import { useEffect, useState } from 'react';
import { StatCard } from '../ui/StatCard';
import { ImpactIllustration } from '../shared/Illustration';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface ImpactOverviewProps {
  stats: Stat[];
}

export function ImpactOverview({ stats }: ImpactOverviewProps) {
  const [animatedStats, setAnimatedStats] = useState<Stat[]>(
    stats.map(stat => ({ ...stat, value: 0 }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('impact-overview');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  function animateStats() {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }

        setAnimatedStats((prev) => {
          const updated = [...prev];
          updated[index] = { ...updated[index], value: Math.floor(current) };
          return updated;
        });
      }, duration / steps);
    });
  }

  return (
    <section id="impact" className="section-padding bg-gray-50">
      <div id="impact-overview" className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact Over 10 Years
            </h2>
            <p className="text-lg max-w-2xl">
              Through dedicated efforts and community support, we've made a lasting
              difference in the lives of children across 4 south Indian states.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <ImpactIllustration className="w-full max-w-md h-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animatedStats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

