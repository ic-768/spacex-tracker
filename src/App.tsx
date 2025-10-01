import { LaunchList } from "./components/launch-list/launch-list";
import { StatPanel } from "./components/stat-panel";
import { useLaunches } from "./hooks/useLaunches";

function App() {
  const {
    launchFetch: { launches, loading, error },
    launchSelection: { isSelected, onSelect },
    aggregatedStats: { totalEnergy, totalPayloadMass },
  } = useLaunches();

  if (loading && !launches) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-8 grid grid-cols-5 gap-4">
      <div className="col-span-4">
        <LaunchList
          launches={launches}
          isSelected={isSelected}
          onSelect={onSelect}
        />
      </div>
      <div className="col-span-1 gap-4 flex flex-col">
        <StatPanel statName="Total Energy" totalStat={totalEnergy} />
        <StatPanel statName="Total Mass" totalStat={totalPayloadMass} />
      </div>
    </div>
  );
}

export default App;
