"use client";

import SearchWithDropdown from "./SearchWithDropdown";

export default function InitialHome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#7A0019]">
              UMass Grades!
            </h1>
            <p className="text-lg text-muted-foreground">
              View all the past grades for classes taken at the University of
              Massachusetts, Amherst.
            </p>
          </div>
          <SearchWithDropdown isHome={true} />
        </div>
      </div>
    </div>
  );
}
