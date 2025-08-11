"use client";

import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const [q, setQ] = useState("");
  return (
    <div className="relative max-w-md">
      <input
        type="search"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search help articles"
        className="w-full rounded-md border px-4 py-2"
      />
      <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
