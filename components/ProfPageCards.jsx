import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GradePieChart from "./GradePieChart";
import { Badge } from "./ui/badge";

export function OverallCard({
  overallData: { students, average, common, gradeData },
}) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>All Classes</CardTitle>
          <span className="text-sm text-gray-500">{students} STUDENTS</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Badge variant="secondary">{average}</Badge>
          <Badge variant="secondary" className="bg-green-100">
            {common}
          </Badge>
        </div>

        <GradePieChart data={gradeData} />
      </CardContent>
    </Card>
  );
}

export function ClassCard({ prof, key }) {
  return (
    <Card key={key} className="mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{prof.name}</CardTitle>
          </div>
          <span className="text-sm text-gray-500">
            {prof.students} STUDENTS
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4 h-fit">
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
