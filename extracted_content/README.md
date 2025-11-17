# Extracted PowerPoint Content

This directory contains all images and text extracted from the LAW PARK.pptx presentation, organized for website development.

## Structure

```
extracted_content/
├── images/              # All extracted images from slides
├── slides_data.json     # Complete mapping of slides, text, and images
└── README.md           # This file
```

## slides_data.json Structure

The JSON file contains an array of slide objects, each with:

- `slide_number`: The slide number (1-indexed)
- `title`: A sanitized title derived from the first text element
- `text_content`: Array of text elements with their shape indices
- `images`: Array of image objects with:
  - `filename`: The saved image filename
  - `path`: Relative path to the image
  - `shape_index`: Original shape index in the slide
- `all_text`: Combined text from all text elements in the slide

## Usage for Website Development

When creating the website, you can:

1. **Load the JSON file** to get all slide data
2. **Reference images** using the paths in the `images` array
3. **Display text** from the `text_content` or `all_text` fields
4. **Maintain relationships** between images and text using the slide structure

## Example Usage

```javascript
// Load the slides data
const slidesData = await fetch('./slides_data.json').then(r => r.json());

// For each slide
slidesData.forEach(slide => {
  // Display slide title
  console.log(slide.title);
  
  // Display all text
  console.log(slide.all_text);
  
  // Display all images
  slide.images.forEach(img => {
    console.log(`Image: ${img.path}`);
  });
});
```

## Image Optimization

All images have been compressed and optimized for web use:
- **Compression**: 91.7% size reduction (190 MB → 15.81 MB)
- **Format**: Converted to JPEG for optimal web performance
- **Max Dimensions**: 1920px (maintains aspect ratio)
- **Quality**: 85% (high quality, web-optimized)
- **Space Saved**: 174.28 MB

## Statistics

- **Total Slides**: 32
- **Total Images**: 57 (all compressed and web-optimized)
- **Image Format**: JPEG (optimized for web)
- **Total Size**: 15.81 MB (down from 190.09 MB)

