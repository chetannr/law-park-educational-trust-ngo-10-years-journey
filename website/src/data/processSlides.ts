import type { Slide, Milestone } from '../types';

// Import the JSON data - we'll copy it to public folder
export async function loadSlidesData(): Promise<Slide[]> {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}extracted_content/slides_data.json`);
    if (!response.ok) {
      throw new Error('Failed to load slides data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading slides data:', error);
    return [];
  }
}

export function processSlidesIntoMilestones(slides: Slide[]): Milestone[] {
  const yearMap = new Map<number, Milestone>();

  slides.forEach((slide) => {
    if (!slide.all_text.trim() && slide.images.length === 0) {
      return; // Skip empty slides
    }

    // Extract year from text
    const yearMatch = slide.all_text.match(/\b(20\d{2})\b/);
    const year = yearMatch ? parseInt(yearMatch[1]) : null;

    if (year && year >= 2016 && year <= 2025) {
      if (!yearMap.has(year)) {
        yearMap.set(year, {
          year,
          title: extractTitle(slide),
          description: slide.all_text,
          images: [],
          location: extractLocation(slide.all_text),
          impact: extractImpact(slide.all_text),
        });
      }

      const milestone = yearMap.get(year)!;
      milestone.images.push(...slide.images);
      
      // Merge descriptions if multiple entries for same year
      if (milestone.description !== slide.all_text && slide.all_text.trim()) {
        milestone.description += '\n\n' + slide.all_text;
      }
    } else {
      // Handle slides without clear year - try to infer from context
      const inferredYear = inferYear(slide, slides);
      if (inferredYear) {
        if (!yearMap.has(inferredYear)) {
          yearMap.set(inferredYear, {
            year: inferredYear,
            title: extractTitle(slide),
            description: slide.all_text,
            images: [],
            location: extractLocation(slide.all_text),
          });
        }
        yearMap.get(inferredYear)!.images.push(...slide.images);
      }
    }
  });

  // Convert map to array and sort by year
  return Array.from(yearMap.values()).sort((a, b) => a.year - b.year);
}

function extractTitle(slide: Slide): string {
  if (slide.all_text.trim()) {
    const firstLine = slide.all_text.split('\n')[0].trim();
    if (firstLine.length > 0 && firstLine.length < 100) {
      return firstLine;
    }
  }
  return `Milestone ${slide.slide_number}`;
}

function extractLocation(text: string): string | undefined {
  const locations = [
    'Chickaballapur',
    'Mysore',
    'H.D. Kote',
    'KGF',
    'Kolar',
    'MM Hills',
    'Pandavapura',
    'Mulbagal',
  ];

  for (const location of locations) {
    if (text.includes(location)) {
      return location;
    }
  }
  return undefined;
}

function extractImpact(text: string): string | undefined {
  const impactPatterns = [
    /(\d+)\s*(?:children|kids|students|scholarship)/i,
    /(\d+)\s*(?:school bags|notebooks|books)/i,
    /(\d+)\s*(?:libraries|schools)/i,
  ];

  for (const pattern of impactPatterns) {
    const match = text.match(pattern);
    if (match) {
      return match[0];
    }
  }
  return undefined;
}

function inferYear(slide: Slide, allSlides: Slide[]): number | null {
  // Try to find year from surrounding slides
  const index = allSlides.indexOf(slide);
  const nearbySlides = allSlides.slice(Math.max(0, index - 2), index + 3);
  
  for (const nearbySlide of nearbySlides) {
    const yearMatch = nearbySlide.all_text.match(/\b(20\d{2})\b/);
    if (yearMatch) {
      return parseInt(yearMatch[1]);
    }
  }
  
  return null;
}

export function getStatistics(slides: Slide[]): Array<{ label: string; value: number; suffix?: string }> {
  const stats = {
    totalStudents: 550, // From slide 31
    totalLocations: new Set<string>(),
    totalPrograms: 0,
    totalImages: 0,
  };

  slides.forEach((slide) => {
    stats.totalImages += slide.images.length;
    if (slide.all_text.trim()) {
      stats.totalPrograms++;
    }
    
    const location = extractLocation(slide.all_text);
    if (location) {
      stats.totalLocations.add(location);
    }
  });

  return [
    { label: 'Students Helped', value: stats.totalStudents, suffix: '+' },
    { label: 'Locations Served', value: stats.totalLocations.size, suffix: '' },
    { label: 'Programs Conducted', value: stats.totalPrograms, suffix: '+' },
    { label: 'Years of Impact', value: 10, suffix: '' },
  ];
}

