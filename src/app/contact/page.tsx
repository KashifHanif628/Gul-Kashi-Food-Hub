import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Contact Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 md:p-16 max-w-2xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-8"> Get in Touch </h1>
          
          {/* Contact Details */}
          <div className="text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <address className="text-lg leading-7 space-y-2 not-italic">
              <p> <span className="font-semibold">Phone:</span> 0313-8069868 </p>
              <p> <span className="font-semibold">WhatsApp:</span> 0313-8069868 </p>
              <p> <span className="font-semibold">Email:</span>{" "} muhammadkashif628@gmail.com </p>
              <p> <span className="font-semibold">Address:</span> Saddar Near Renbow Center, Karachi. </p>
            </address>
          </div>
          
          {/* Opening Hours */}
          <div className="mt-8 flex items-center gap-6">
            {/* Zoom Effect on Image */}
            <div className="relative group">
              <Image src="/images/logo.jpeg" alt="Pizza Logo" width={120} height={110} className="rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <p className="text-xl font-semibold text-yellow-400">Opening Hours</p>
              <p className="text-gray-700 text-base"> Mon - Sat: 11:00 AM to 2:00 AM </p>
              <p className="text-gray-700 text-base">Sunday: Open</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-8 text-center">
            <a href="tel:+923138069868" className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300" > Call Us Now </a>
          </div>
        </div>
      </div>
    </div>
  );
}