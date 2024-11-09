"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import SearchBar from "./SearchBar";
import { OverallCard, ProfCard } from "./ClassPageCards";

// Mock data for grade distribution
const gradeData = [
  { grade: "A", students: 4366, value: 50, color: "#4CAF50" },
  { grade: "A-", students: 1310, value: 15, color: "#8BC34A" },
  { grade: "B+", students: 873, value: 10, color: "#CDDC39" },
  { grade: "B", students: 699, value: 8, color: "#FFEB3B" },
  { grade: "B-", students: 524, value: 6, color: "#FFC107" },
  { grade: "C+", students: 349, value: 4, color: "#FF9800" },
  { grade: "C", students: 262, value: 3, color: "#FF5722" },
  { grade: "C-", students: 175, value: 2, color: "#F44336" },
  { grade: "D", students: 87, value: 1, color: "#E91E63" },
  { grade: "F", students: 87, value: 1, color: "#9C27B0" },
];

export function GradeDistribution() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-red-900">
            CSCI 1133: Introduction to Computing and Programming Concepts
          </h1>
          <Badge variant="secondary" className="mb-4">
            4 Credits
          </Badge>
          <p className="mb-4 text-gray-600">
            Fundamental programming concepts using Python language. Problem
            solving skills, recursion, object-oriented programming. Algorithm
            development techniques. Use of abstractions/modularity. Data
            structures/abstract data types. Develop programs to solve real-world
            problems. prereq: none
          </p>
          <Button variant="outline" className="text-gray-500">
            View on University Catalog
          </Button>
        </div>

        <OverallCard gradeData={gradeData} />

        {[
          {
            name: "Giuseppe Vietri",
            semester: "Spring 2021",
            students: 36,
            average: "A- Average (3.778)",
            common: "Most Common: A (61%)",
            gradeData: [
              { grade: "A", students: 4366, value: 50, color: "#4CAF50" },
              { grade: "A-", students: 1310, value: 15, color: "#8BC34A" },
              { grade: "B+", students: 873, value: 10, color: "#CDDC39" },
              { grade: "B", students: 699, value: 8, color: "#FFEB3B" },
              { grade: "B-", students: 524, value: 6, color: "#FFC107" },
              { grade: "C+", students: 349, value: 4, color: "#FF9800" },
              { grade: "C", students: 262, value: 3, color: "#FF5722" },
              { grade: "C-", students: 175, value: 2, color: "#F44336" },
              { grade: "D", students: 87, value: 1, color: "#E91E63" },
              { grade: "F", students: 87, value: 1, color: "#9C27B0" },
            ],
          },
          {
            name: "Bridger Herman",
            semester: "Fall 2020",
            students: 38,
            average: "A- Average (3.733)",
            common: "Most Common: A (53%)",
            rating: "5.0",
            gradeData: [
              { grade: "A", students: 20, value: 53, color: "#4CAF50" },
              { grade: "A-", students: 10, value: 25, color: "#8BC34A" },
              { grade: "B+", students: 5, value: 12, color: "#CDDC39" },
              { grade: "B", students: 2, value: 7, color: "#FFEB3B" },
              { grade: "B-", students: 1, value: 3, color: "#FFC107" },
            ],
          },
          {
            name: "Evan Suma Rosenberg",
            semester: "Spring 2020",
            students: 93,
            average: "A- Average (3.720)",
            common: "Most Common: A (60%)",
            rating: "5.0",
            gradeData: [
              { grade: "A", students: 56, value: 60, color: "#4CAF50" },
              { grade: "A-", students: 17, value: 18, color: "#8BC34A" },
              { grade: "B+", students: 9, value: 10, color: "#CDDC39" },
              { grade: "B", students: 7, value: 7, color: "#FFEB3B" },
              { grade: "B-", students: 4, value: 5, color: "#FFC107" },
            ],
          },
        ].map((instructor) => (
          <ProfCard prof={instructor} key={instructor.name} />
        ))}
      </div>
    </div>
  );
}
