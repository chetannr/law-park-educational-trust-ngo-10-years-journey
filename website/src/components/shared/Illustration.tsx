interface IllustrationProps {
  name: string;
  color?: string;
  className?: string;
}

// unDraw illustrations with customizable colors
// Using unDraw illustrations - download from https://undraw.co with custom color (#16a34a)
// and place them in public/illustrations/ folder
// 
// Quick setup: Visit https://undraw.co, search for illustrations, set color to #16a34a,
// download as SVG, and save to public/illustrations/ with the names below
export function Illustration({ name, color = '16a34a', className = '' }: IllustrationProps) {
  // Try local path first (recommended for production)
  const localPath = `/illustrations/${name}.svg`;
  
  return (
    <img
      src={localPath}
      alt=""
      className={className}
      loading="lazy"
      aria-hidden="true"
      onError={(e) => {
        // If local file doesn't exist, show a placeholder or use inline SVG
        const target = e.target as HTMLImageElement;
        // You can add a placeholder SVG here or download the illustration
        console.log(`Illustration "${name}" not found. Please download from unDraw.co and place in public/illustrations/`);
      }}
    />
  );
}

// Pre-configured illustrations for common use cases
// Using relevant unDraw illustration names for education/charity themes
export function EducationIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="educator"
      color="16a34a"
      className={className}
    />
  );
}

export function CommunityIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="community"
      color="16a34a"
      className={className}
    />
  );
}

export function ImpactIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="growth"
      color="16a34a"
      className={className}
    />
  );
}

export function VolunteerIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="team"
      color="ffffff"
      className={className}
    />
  );
}

export function DonationIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="donation"
      color="16a34a"
      className={className}
    />
  );
}

export function ScholarshipIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="graduation"
      color="16a34a"
      className={className}
    />
  );
}

export function ChildrenIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="children"
      color="16a34a"
      className={className}
    />
  );
}

export function BooksIllustration({ className = '' }: { className?: string }) {
  return (
    <Illustration
      name="books"
      color="16a34a"
      className={className}
    />
  );
}
