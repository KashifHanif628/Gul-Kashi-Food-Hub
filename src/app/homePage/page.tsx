import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex items-center justify-center px-4 text-center">
        <Image
          src="/images/unsplash.png" 
          alt="Delicious food"
          fill
          className="opacity-50 object-cover"
        />
        <div className="absolute max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-lg sm:whitespace-normal animate-bounce">
            Welcome to <span className="text-orange-500">Gul-Kashi</span> <br className="hidden sm:block" /> Food Hub
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-2xl text-gray-300">
            Experience the best of culinary delights with fresh, high-quality ingredients. Our chefs bring you taste that feels like home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/food"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/about"
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-16 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["quality.jpeg", "delivery.png", "customer.png"].map((img, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/images/${img}`}
                  alt="Feature Image"
                  width={150}
                  height={150}
                  className="mx-auto object-cover transition-transform duration-300 hover:scale-110 rounded"
                />
                <h3 className="text-2xl font-semibold mt-4">
                  {index === 0 ? "High-Quality Food" : index === 1 ? "Fast Delivery" : "Customer Satisfaction"}
                </h3>
                <p className="mt-2 text-gray-400">
                  {index === 0 ? "We use the freshest ingredients to ensure every bite is delightful and flavorful." : index === 1 ? "Get your favorite meals delivered to your doorstep in no time." : "Your happiness is our priority. We aim to provide the best service always."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">
            Ready to Taste the Difference?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
            Join thousands of happy customers who have made Gul-Kashi Food Hub their go-to spot for delicious food.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
