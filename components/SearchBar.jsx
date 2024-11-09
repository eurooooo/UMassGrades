import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchBar({ searchQuery, setSearchQuery, isHome }) {
  return (
    <div className={`relative mb-8 ${isHome ? "max-w-2xl mx-auto" : ""}`}>
      <Search className="absolute w-4 h-4 text-gray-400 left-3 top-3" />
      <Input
        className="h-10 pl-10"
        placeholder="Search by Class, Instructor, or Department"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
