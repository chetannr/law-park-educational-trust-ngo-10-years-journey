export interface SlideImage {
  filename: string;
  path: string;
  shape_index: number;
}

export interface TextContent {
  shape_index: number;
  text: string;
}

export interface Slide {
  slide_number: number;
  text_content: TextContent[];
  images: SlideImage[];
  all_text: string;
  title: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
  images: SlideImage[];
  location?: string;
  impact?: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

