import { Card } from '../ui/Card';
import { LazyImage } from '../shared/LazyImage';
import type { Trustee } from '../../data/websiteContent';

interface TrusteesProps {
  trustees: Trustee[];
}

export function Trustees({ trustees }: TrusteesProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Trustees
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Meet the dedicated individuals leading our mission to transform lives through education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trustees.map((trustee, index) => (
            <Card key={index} hover className="p-6">
              {trustee.image && (
                <div className="mb-4">
                  <LazyImage
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{trustee.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">{trustee.role}</p>
                <p className="text-gray-600 leading-relaxed">{trustee.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

