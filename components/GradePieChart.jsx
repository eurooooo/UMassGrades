import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

export default function GradePieChart({ data }) {
  return (
    <ChartContainer
      config={{
        ...Object.fromEntries(
          data.map((item) => [
            item.grade,
            { label: item.grade, color: item.color },
          ])
        ),
      }}
      className="h-[200px] w-[200px]"
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
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

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
