import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface LaunchesPerYearProps {
  launchesPerYear: { year: string; count: number }[];
}

export const LaunchesPerYear = ({ launchesPerYear }: LaunchesPerYearProps) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Launches Per Year</h3>
      <ResponsiveContainer height={300}>
        <LineChart data={launchesPerYear}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
