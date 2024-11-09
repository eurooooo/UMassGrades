import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GradePieChart from "./GradePieChart";
import { Badge } from "./ui/badge";

export function OverallCard({ gradeData }) {
  return (
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
          This total also includes data from semesters with unknown instructors.
        </p>

        <GradePieChart data={gradeData} />
      </CardContent>
    </Card>
  );
}

export function ProfCard({ prof, key }) {
  return (
    <Card key={key} className="mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{prof.name}</CardTitle>
            <div className="text-sm text-gray-500">{prof.semester}</div>
          </div>
          <span className="text-sm text-gray-500">
            {prof.students} STUDENTS
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Badge variant="secondary">{prof.average}</Badge>
          <Badge variant="secondary" className="bg-green-100">
            {prof.common}
          </Badge>
        </div>
        <GradePieChart data={prof.gradeData} />
      </CardContent>
    </Card>
  );
}
