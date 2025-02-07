"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Food {
  name: string;
  slug: { current: string };
  imageUrl: string;
  tags: string[];
  price: number;
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<Food[]>([]);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const searchQuery = `
        *[_type == "food" && (name match "${query}*" || "${query}" in tags)] {
          name,
          "slug": slug.current,
          "imageUrl": image.asset->url,
          price
        }
      `;
      const data = await client.fetch(searchQuery);
      setResults(data);
    };

    fetchResults();
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold">Search Results for &quot;{query}&quot;</h1>
      {results.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {results.map((item, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-green-400">${item.price}</p>
              </div>
              <Link
                href={`/product/${item.slug}`}
                className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700"
              >
                View Product
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 mt-4">No results found.</p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
