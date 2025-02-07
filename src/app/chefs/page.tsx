import React from "react";
import Image from "next/image";

export default function Chefs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-400 text-center mb-10 mt-8">
          <q>Our-Chefs</q>
        </h1>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-6 mx-auto mt-10 max-w-screen-lg">
          {[ 
            { name: "Tahmina Rumi", Image: "picture1.png" },
            { name: "Jorina Begum", Image: "picture2.png" },
            { name: "M.Mohammad", Image: "picture3.png" },
            { name: "Munna Kathy", Image: "picture4.png" },
            { name: "Tahmina Rumi", Image: "picture5.png" },
            { name: "Bisnu Devgon", Image: "picture6.png" },
            { name: "Motin Molladsf", Image: "picture7.png" },
            { name: "William Rumi", Image: "picture8.png" },
            { name: "Kets William Roy", Image: "picture9.png" },
            { name: "Mahmud Kholil", Image: "picture10.png" },
            { name: "Ataur Rahman", Image: "picture11.png" },
            { name: "Monalisa Holly", Image: "picture12.png" },
          ].map((chef, index) => (
            <div key={index} className="text-center">
              <Image src={`/images2/${chef.Image}`} alt={chef.name} width={312} height={312} className="mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 " />
              <p className="text-2xl font-bold text-yellow-400 mt-2"> {chef.name} </p>
              <p className="text-lg text-gray-300">Chef</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}