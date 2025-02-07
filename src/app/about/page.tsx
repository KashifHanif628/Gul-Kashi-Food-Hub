import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-10">
          <q> About Us </q>
        </h1>

        {/* Introduction */}
        <div className="space-y-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to <span className="text-yellow-400">Food Hub</span>, your ultimate destination for
            high-quality, delicious, and freshly prepared food. We believe in
            serving not just meals, but memorable experiences filled with taste
            and satisfaction.
          </p>

          <h2 className="text-4xl font-bold text-yellow-400 mt-10">
            Why Choose Food Hub?
          </h2>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
              <Image
                src="/images/quality.jpeg"
                alt="Fresh Ingredients"
                width={300}
                height={200}
                className="rounded-md mb-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-300">
                We use only the freshest and finest ingredients to prepare our
                dishes, ensuring every bite is perfect.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
              <Image
                src="/images/delivery.png"
                alt="Fast Delivery"
                width={300}
                height={200}
                className="rounded-md mb-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-300">
                Enjoy quick and reliable delivery to your doorstep, making your
                dining experience hassle-free.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
              <Image
                src="/images/customer.png"
                alt="Customer Satisfaction"
                width={300}
                height={200}
                className="rounded-md mb-4 place-items-center transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-300">
                With a focus on customer satisfaction, we strive to make every
                experience delightful and fulfilling.
              </p>
            </div>
          </div>

          {/* More Features */}
          <div className="mt-12 text-left">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              What Makes Us Special?
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>Convenient payment options like Easypaisa and JazzCash.</li>
              <li>Perfectly crafted meals for students, offices, and families.</li>
              <li>Customizable options to meet your specific needs.</li>
              <li>24/7 customer support to assist you anytime.</li>
              <li>
                A wide variety of dishes ranging from traditional to
                international cuisines.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Experience the Best in Food!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              At Food Hub, we don&apos;t just serve food; we serve happiness. Join us
              and explore a world of flavors, convenience, and excellence.
            </p>
            <Link
              href="/contact" 
              className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
