import { Button } from '../ui/Button';
import { VolunteerIllustration, DonationIllustration } from '../shared/Illustration';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3">
          <VolunteerIllustration className="w-full h-auto" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3">
          <DonationIllustration className="w-full h-auto" />
        </div>
      </div>
      <div className="container-custom text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
          Your support can help us reach more children and create lasting change
          in their lives. Together, we can build a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Donate Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white text-white hover:bg-white/20"
          >
            Become a Volunteer
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white text-white hover:bg-white/20"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}

