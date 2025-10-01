import { EnergyUsage } from "./components/data-visualisation/energy-usage";
import { LaunchesPerYear } from "./components/data-visualisation/launches-per-year";
import { RocketUsage } from "./components/data-visualisation/rocket-usage";
import { LaunchList } from "./components/launch-list/launch-list";
import { StatPanel } from "./components/stat-panel";
import { Button } from "./components/ui/button";
import { useLaunches } from "./hooks/useLaunches";

function App() {
  const {
    fetched: { launches, loading, error },
    selection: { isSelected, onToggleSelect, onClearSelection, onSelectAll },
    aggregatedStats: {
      totalEnergy,
      totalPayloadMass,
      launchesByRocket,
      launchesByYear,
      energyByRocket,
    },
  } = useLaunches();

  if (loading || !launches) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-8 grid grid-cols-4 gap-4">
      <div className="col-span-2">
        <LaunchList
          launches={launches}
          isSelected={isSelected}
          onSelect={onToggleSelect}
        />
      </div>

      <div className="col-span-2">
        <div className="sticky top-8 flex flex-col gap-4">
          <div className="flex gap-4">
            <LaunchesPerYear launchesPerYear={launchesByYear} />
            <RocketUsage rocketUsage={launchesByRocket} />
          </div>
          <EnergyUsage data={energyByRocket} />
          <div className="flex gap-4 justify-center">
            <StatPanel statName="Total Energy" totalStat={totalEnergy} />
            <StatPanel statName="Total Mass" totalStat={totalPayloadMass} />
          </div>
          <div className="w-full flex justify-center gap-4">
            <Button onClick={onSelectAll}>Select All</Button>
            <Button onClick={onClearSelection} variant="destructive">
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
