export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Law Park Educational Trust</h3>
            <p className="text-gray-400">
              Transforming lives through education, one child at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Impact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">
              <strong className="text-white">Change A Life Today</strong>
            </p>
            <p className="text-gray-400 mb-2">
              Reach out to us at:
            </p>
            <p className="text-gray-400 mb-2">
              <a href="tel:+919945665379" className="hover:text-white transition-colors">
                +91-9945665379
              </a>
            </p>
            <p className="text-gray-400">
              <a href="mailto:empower@lawparkeducationaltrust.org" className="hover:text-white transition-colors">
                empower@lawparkeducationaltrust.org
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Law Park Educational Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

