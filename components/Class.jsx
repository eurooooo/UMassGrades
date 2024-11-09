"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import SearchBar from "./SearchBar";
import { OverallCard, ProfCard } from "./ClassPageCards";
import {
  gradeToColor,
  calculateAverageGPA,
  calculateMostCommon,
} from "@/lib/grade";

const classInfo = {
  classId: "CS200",
  className: "Operating System",
  description: "Rigorous analysis of algorithms/implementation.",
  profs: [
    {
      profId: 1,
      profName: "Alex",
      grades: [
        { grade: "A", count: 5 },
        { grade: "A-", count: 4 },
        { grade: "B+", count: 3 },
        { grade: "B", count: 3 },
        { grade: "B-", count: 2 },
        { grade: "C+", count: 3 },
        { grade: "C", count: 2 },
        { grade: "C-", count: 1 },
        { grade: "D+", count: 0 },
        { grade: "D", count: 0 },
        { grade: "F", count: 1 },
      ],
    },
    {
      profId: 2,
      profName: "Bob",
      grades: [
        { grade: "A", count: 5 },
        { grade: "A-", count: 4 },
        { grade: "B+", count: 3 },
        { grade: "B", count: 3 },
        { grade: "B-", count: 2 },
        { grade: "C+", count: 3 },
        { grade: "C", count: 2 },
        { grade: "C-", count: 1 },
        { grade: "D+", count: 0 },
        { grade: "D", count: 0 },
        { grade: "F", count: 1 },
      ],
    },
  ],
};

const grade = classInfo.profs.map((prof) => {
  return {
    name: prof.profName,
    students: prof.grades.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    ),
    average: calculateAverageGPA(prof.grades),
    common: calculateMostCommon(prof.grades),
  };
});

console.log(grade);

const gradeData = [
  {
    name: "Giuseppe Vietri",
    students: 36,
    average: "A- Average (3.778)",
    common: "Most Common: A (61%)",
    gradeData: [
      { grade: "A", students: 4366, value: 50, color: gradeToColor("A") },
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
];

export function GradeDistribution() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Overview />

        <OverallCard gradeData={gradeData} />

        {gradeData.map((instructor) => (
          <ProfCard prof={instructor} key={instructor.name} />
        ))}
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-3xl font-bold text-red-900">
        CSCI 1133: Introduction to Computing and Programming Concepts
      </h1>
      <Badge variant="secondary" className="mb-4">
        4 Credits
      </Badge>
      <p className="mb-4 text-gray-600">
        Fundamental programming concepts using Python language. Problem solving
        skills, recursion, object-oriented programming. Algorithm development
        techniques. Use of abstractions/modularity. Data structures/abstract
        data types. Develop programs to solve real-world problems. prereq: none
      </p>
      <Button variant="outline" className="text-gray-500">
        View on University Catalog
      </Button>
    </div>
  );
}
