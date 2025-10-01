interface StatPanelProps {
  statName: string;
  totalStat: number;
}

export const StatPanel = ({ statName, totalStat }: StatPanelProps) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64">
      <h3 className="text-lg font-semibold mb-2">{statName}</h3>
      <p className="text-2xl font-bold">{totalStat} GJ</p>
    </div>
  );
};
