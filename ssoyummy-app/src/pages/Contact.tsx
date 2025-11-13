import { MapPin, Phone } from 'lucide-react';
import foodImage from '../assets/homepage.png'

export default function Contact() {
  return (
    <>
      <div className="max-w-2xl mx-auto">
      <picture>
        <source media="(min-width: 500px)" srcSet={foodImage} />
        <img 
          alt="Delicious Food"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>

    <div className="">
      <div className="pt-5 px-30 py-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Address Card */}
          <a href='https://maps.app.goo.gl/4NvPzamcQW7R54B49'>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  128 2 Ave SE Unit 117, Calgary, AB T2G 5J5
                </p>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+1-403-455-6564">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
                <a 
                  href="tel:+1403455-6564" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
                  >
                  (403) 455-6564
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
    </>
  );
}