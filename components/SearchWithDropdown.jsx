"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";
import debounce from "lodash/debounce";

// Mock data structure - replace with your actual data fetching logic
const mockData = {
  classes: [
    { id: 1, name: "Associate Degree in Arts 101" },
    { id: 2, name: "Computer Science 202" },
    // Add more classes...
  ],
  professors: [
    { id: 1, name: "Kelvin Ratke" },
    { id: 2, name: "Francesco Pfeffer" },
    // Add more professors...
  ],
};

export default function SearchWithDropdown({ isHome }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    classes: [],
    professors: [],
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const debouncedSearch = debounce((query) => {
    if (query.trim() === "") {
      setSearchResults({ classes: [], professors: [] });
      return;
    }

    const filteredClasses = mockData.classes.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredProfessors = mockData.professors.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults({
      classes: filteredClasses,
      professors: filteredProfessors,
    });
  }, 300);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => debouncedSearch.cancel();
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  return (
    <div
      className={`relative ${isHome ? "max-w-2xl mx-auto" : "mb-4"}`}
      ref={dropdownRef}
    >
      <Search className="absolute w-4 h-4 text-gray-400 left-3 top-3" />
      <Input
        className="h-10 pl-10"
        placeholder="Search by Class, Instructor, or Department"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={() => setIsDropdownOpen(true)}
      />
      {isDropdownOpen &&
        (searchResults.classes.length > 0 ||
          searchResults.professors.length > 0) && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
            {searchResults.classes.length > 0 && (
              <div className="p-2">
                <h3 className="mb-2 text-sm font-semibold text-gray-500">
                  Classes
                </h3>
                {searchResults.classes.map((c) => (
                  <Link
                    key={c.id}
                    href={`/class/${c.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 rounded hover:bg-gray-100"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
            {searchResults.professors.length > 0 && (
              <div className="p-2 border-t">
                <h3 className="mb-2 text-sm font-semibold text-gray-500">
                  Professors
                </h3>
                {searchResults.professors.map((p) => (
                  <Link
                    key={p.id}
                    href={`/professor/${p.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 rounded hover:bg-gray-100"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
    </div>
  );
}
