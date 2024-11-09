import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function InitialHome() {
  return (
    <div className="container max-w-4xl px-4 py-12 mx-auto">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#7A0019]">
            UMass Grades
          </h1>
          <p className="text-lg text-muted-foreground">
            View all the past grades for classes taken at the University of
            Massachusetts, Amherst.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute w-5 h-5 left-3 top-3 text-muted-foreground" />
          <Input
            className="w-full h-12 pl-10"
            placeholder="Search by Class, Instructor, or Department"
            type="search"
          />
        </div>
      </div>
    </div>
  );
}
