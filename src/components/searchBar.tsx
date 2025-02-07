"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?query=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center bg-gray-800 p-2 rounded-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="bg-transparent text-white px-4 py-2 focus:outline-none"
      />
      <button type="submit" className="text-white px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 items-end">
        🔍
      </button>
    </form>
  );
}
