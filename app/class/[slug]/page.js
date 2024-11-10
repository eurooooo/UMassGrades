"use client";

import { OverallCard, ProfCard } from "@/components/ClassPageCards";
import {
  calculateAverageGPA,
  calculateMostCommon,
  formatGradeData,
  mergeGrades,
} from "@/lib/grade";
import SearchWithDropdown from "@/components/SearchWithDropdown";
import Link from "next/link";

const classInfo = {
  classId: "CS200",
  className: "Operating System",
  description:
    "A fundamental overview of operating systems (OSes) with an emphasis on practice. Topics covered include: OS structure, OS models, OS abstractions.",
  profs: [
    {
      profId: 1,
      profName: "Alex Lin",
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
      profName: "Francesco Pfeffer",
      grades: [
        { grade: "A", count: 5 },
        { grade: "A-", count: 4 },
        { grade: "B+", count: 3 },
        { grade: "B", count: 3 },
        { grade: "B-", count: 2 },
        { grade: "C+", count: 3 },
        { grade: "C", count: 2 },
        { grade: "C-", count: 1 },
        { grade: "D+", count: 1 },
        { grade: "D", count: 2 },
        { grade: "F", count: 1 },
      ],
    },
  ],
};

const profs = classInfo.profs.map((prof) => {
  return {
    id: prof.profId,
    name: prof.profName,
    students: prof.grades.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    ),
    average: calculateAverageGPA(prof.grades),
    common: calculateMostCommon(prof.grades),
    gradeData: formatGradeData(prof.grades),
  };
});

const overallGrades = mergeGrades(classInfo.profs);
const overallData = {
  students: overallGrades.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  ),
  average: calculateAverageGPA(overallGrades),
  common: calculateMostCommon(overallGrades),
  gradeData: formatGradeData(overallGrades),
};

// const gradeData = [
//   {
//     name: "Giuseppe Vietri",
//     students: 36,
//     average: "A- Average (3.778)",
//     common: "Most Common: A (61%)",
//     gradeData: [
//       { grade: "A", students: 4366, value: 50, color: gradeToColor("A") },
//       { grade: "A-", students: 1310, value: 15, color: "#8BC34A" },
//       { grade: "B+", students: 873, value: 10, color: "#CDDC39" },
//       { grade: "B", students: 699, value: 8, color: "#FFEB3B" },
//       { grade: "B-", students: 524, value: 6, color: "#FFC107" },
//       { grade: "C+", students: 349, value: 4, color: "#FF9800" },
//       { grade: "C", students: 262, value: 3, color: "#FF5722" },
//       { grade: "C-", students: 175, value: 2, color: "#F44336" },
//       { grade: "D", students: 87, value: 1, color: "#E91E63" },
//       { grade: "F", students: 87, value: 1, color: "#9C27B0" },
//     ],
//   },
// ];

export default function ClassSlug() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <SearchWithDropdown />

        <Overview />

        <OverallCard overallData={overallData} />

        <ul>
          {profs.map((prof) => (
            <li key={prof.id}>
              <Link href={`/prof/${prof.id}`}>
                <ProfCard prof={prof} key={prof.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-3xl font-bold text-red-900">
        {`${classInfo.classId}: ${classInfo.className}`}
      </h1>
      <p className="mb-4 text-gray-600">{classInfo.description}</p>
    </div>
  );
}
