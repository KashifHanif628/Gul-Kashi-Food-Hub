"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

interface Foods {
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  tags: string[];
  quantity?: number;
}

export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;
  const [food, setFood] = useState<Foods | null>(null);
  const [cart, setCart] = useState<Foods[]>(() => {
    return typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("cart") || "[]") : [];
  });

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const query = groq`
        *[_type == "food" && slug.current == "${slug}"][0] {
          name,
          category,
          price,
          description,
          originalPrice,
          "imageUrl": image.asset->url,
          tags
        }
      `;
      const data = await client.fetch(query);
      setFood(data);
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (food: Foods) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === food.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === food.name ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const updateQuantity = (name: string, increment: boolean) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: increment ? (item.quantity || 1) + 1 : Math.max((item.quantity || 1) - 1, 1) }
            : item
        )
        .filter((item) => item.quantity !== 0)
    );
  };

  // 💰 **Calculate Total Amount**
  const totalAmount = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  if (!food) {
    return <div className="text-center text-red-500 font-bold text-xl mt-10">Product is Loading...!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10 bg-black text-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={food.imageUrl}
          alt={food.name}
          width={600}
          height={600}
          className="rounded-lg object-cover w-full h-96 shadow-xl"
        />
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-extrabold text-gray-100">{food.name}</h1>
        <p className="text-lg text-gray-400 mt-2">Price: <span className="text-green-400">${food.price}</span></p>
        <p className="text-lg text-gray-500 mt-2 line-through">Original Price: ${food.originalPrice}</p>
        <p className="text-gray-300 mt-4">{food.description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {food.tags?.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-700 text-white rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all font-bold"
          onClick={() => addToCart(food)}
        >
          Add to Cart
        </button>
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-green-400">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-yellow-400">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-white bg-green-600 px-2 rounded" onClick={() => updateQuantity(item.name, true)}>+</button>
                  <button className="text-white bg-red-600 px-2 rounded" onClick={() => updateQuantity(item.name, false)}>-</button>
                  <button className="text-white bg-red-700 px-2 rounded" onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">Your Cart is empty. Please add Products</p>
        )}

        {/* 🛒 Total Amount Section */}
        {cart.length > 0 && (
          <div className="mt-4 text-lg font-bold text-white text-center">
            Total Amount: <span className="text-green-400">${totalAmount.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
