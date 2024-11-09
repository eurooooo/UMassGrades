export default function PieChartLegend() {
  const scales = [
    { value: "A", color: "bg-[#4CAF50]" }, // #4CAF50
    { value: "A-", color: "bg-[#8BC34A]" }, // #8BC34A
    { value: "B+", color: "bg-[#CDDC39]" }, // #CDDC39
    { value: "B", color: "bg-[#FFEB3B]" }, // #FFEB3B
    { value: "B-", color: "bg-[#FFC107]" }, // #FFC107
    { value: "C+", color: "bg-[#FF9800]" }, // #FF9800
    { value: "C", color: "bg-[#FF5722]" }, // #FF5722
    { value: "C-", color: "bg-[#F44336]" }, // #F44336
    { value: "D", color: "bg-[#E91E63]" }, // #E91E63
    { value: "F", color: "bg-[#9C27B0]" }, // #9C27B0
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {scales.map((scale) => (
        <div key={scale.value} className="flex items-center gap-1">
          <div className={`w-4 h-4 ${scale.color}`} />
          <span className="text-sm text-gray-600">{scale.value}</span>
        </div>
      ))}
    </div>
  );
}
