"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const client = createClient({
  projectId: "wcss6u9t",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

interface Foods {
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  slug: {
    _type: "slug"
    current: string;
  };
}

const ProductCards: React.FC = () => {
  const [foods, setFoods] = useState<Foods[]>([]);
  const [cart, setCart] = useState<Foods[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
      *[_type == "food"] {
        name,
        category,
        price,
        description,
        originalPrice,
        "imageUrl": image.asset->url,
        tags,
        slug
      }
      `;

      const data = await client.fetch(query);
      setFoods(data);
      console.log(data)
    } catch (err) {
      console.error("Error Fetching Products:", err);
    }
  };
  

  const addToCart = (food: Foods) => {
    setCart((prevCart) => [...prevCart, food]);
    alert(`${food.name} has been added to your cart!`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 bg-black min-h-screen">
      <h1 className="text-center text-yellow-400 mt-4 mb-4 text-4xl font-extrabold tracking-wide uppercase">
        <q> Our Menu </q></h1>
      <br />
      <h2 className="text-center text-red-500 mt-4 mb-8 text-2xl font-bold">
        Best Food for your Life
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div
            key={food.name}
            className="bg-gray-900 text-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Link href={`/product/${food.slug.current}`}>
            <div className="overflow-hidden">
            <Image
              src={food?.imageUrl}
              alt={food.name}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-t-md transition-transform duration-300 hover:scale-110"
            />
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-bold text-red-400">{food.name}</h2>
              <p className="text-gray-300 mt-2 text-sm">{food.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="">
                  <p className="text-yellow-400 font-bold">
                    Price: ${food.price}
                  </p>
                  <p className="text-green-500 text-sm">
                    Original Price: ${food.originalPrice}  
                  </p>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {food.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-700 text-white rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              

              {/* Add to cart Functionality */}
              <button
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all font-bold"
                onClick={() => addToCart(food)}
              >
                Add to Cart
              </button>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-red-500">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-700 shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-yellow-400">
                    ${item.price}
                  </p>
                  <Image
                    src={item?.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">
            Your Cart is empty. Please add Products
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
