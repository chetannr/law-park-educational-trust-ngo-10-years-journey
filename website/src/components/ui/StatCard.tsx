interface StatCardProps {
  label: string;
  value: number | string;
  suffix?: string;
  description?: string;
}

export function StatCard({ label, value, suffix = '', description }: StatCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {value}{suffix}
      </div>
      <div className="text-lg font-semibold text-gray-800 mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-600 mt-2">{description}</div>
      )}
    </div>
  );
}

