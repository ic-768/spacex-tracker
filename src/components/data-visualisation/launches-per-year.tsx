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
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2">Launches Per Year</h3>
      <ResponsiveContainer width="100%" height={300}>
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
