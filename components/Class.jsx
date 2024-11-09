"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-2 bg-white border border-gray-200 rounded shadow">
        <p className="font-semibold">{`${data.grade}: ${data.value}% (${data.students})`}</p>
      </div>
    );
  }
  return null;
};

const PieChartWithPaddingAngle = ({ data }) => (
  <ChartContainer
    config={{
      ...Object.fromEntries(
        data.map((item) => [
          item.grade,
          { label: item.grade, color: item.color },
        ])
      ),
    }}
    className="h-[300px]"
  >
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    <ChartLegend
      content={<ChartLegendContent nameKey="grade" />}
      className="flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
    />
  </ChartContainer>
);

export function GradeDistribution() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="relative mb-8">
          <Search className="absolute w-4 h-4 text-gray-400 left-3 top-3" />
          <Input
            className="pl-10"
            placeholder="Search by Class, Instructor, or Department"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

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

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Instructors</CardTitle>
              <span className="text-sm text-gray-500">8732 STUDENTS</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary">B+ Average (3.469)</Badge>
              <Badge variant="secondary" className="bg-green-100">
                Most Common: A (50%)
              </Badge>
            </div>
            <p className="mb-4 text-sm text-gray-500">
              This total also includes data from semesters with unknown
              instructors.
            </p>

            <PieChartWithPaddingAngle data={gradeData} />

            <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-5">
              {[
                { label: "RECOMMEND", value: "4.44" },
                { label: "EFFORT", value: "4.46" },
                { label: "UNDERSTANDING", value: "4.59" },
                { label: "INTERESTING", value: "4.39" },
                { label: "ACTIVITIES", value: "4.54" },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                  <div className="text-xs text-gray-400">/5</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {[
          {
            name: "Giuseppe Vietri",
            semester: "Spring 2021",
            students: 36,
            average: "A- Average (3.778)",
            common: "Most Common: A (61%)",
            gradeData: [
              { grade: "A", students: 22, value: 61, color: "#4CAF50" },
              { grade: "A-", students: 7, value: 20, color: "#8BC34A" },
              { grade: "B+", students: 4, value: 10, color: "#CDDC39" },
              { grade: "B", students: 2, value: 5, color: "#FFEB3B" },
              { grade: "B-", students: 1, value: 4, color: "#FFC107" },
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
          <Card
            key={`${instructor.name}-${instructor.semester}`}
            className="mb-4"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{instructor.name}</CardTitle>
                  <div className="text-sm text-gray-500">
                    {instructor.semester}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {instructor.students} STUDENTS
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                {instructor.rating && (
                  <Badge
                    variant="outline"
                    className="text-green-700 border-green-500"
                  >
                    {instructor.rating} ★★★★★
                  </Badge>
                )}
                <Badge variant="secondary">{instructor.average}</Badge>
                <Badge variant="secondary" className="bg-green-100">
                  {instructor.common}
                </Badge>
              </div>
              <PieChartWithPaddingAngle data={instructor.gradeData} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
