import { Card } from "@/components/ui/card";

export const KPICharts = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h4 className="text-sm font-semibold mb-4 text-foreground">Utilization Trend</h4>
        <div className="h-48 flex items-end justify-between gap-2">
          {[75, 82, 78, 88, 92, 89, 96].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-chart-1 rounded-t transition-all hover:bg-chart-1/80"
                style={{ height: `${value}%` }}
              />
              <span className="text-xs text-muted-foreground">
                W{index + 1}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="text-sm font-semibold mb-4 text-foreground">Delay Reduction</h4>
        <div className="h-48 flex items-end justify-between gap-2">
          {[40, 35, 32, 28, 22, 18, 12].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-chart-2 rounded-t transition-all hover:bg-chart-2/80"
                style={{ height: `${100 - value}%` }}
              />
              <span className="text-xs text-muted-foreground">
                W{index + 1}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="text-sm font-semibold mb-4 text-foreground">Cost Efficiency</h4>
        <div className="h-48 flex items-end justify-between gap-2">
          {[3.2, 3.0, 2.8, 2.7, 2.6, 2.5, 2.4].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-chart-3 rounded-t transition-all hover:bg-chart-3/80"
                style={{ height: `${(4 - value) * 25}%` }}
              />
              <span className="text-xs text-muted-foreground">
                W{index + 1}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="text-sm font-semibold mb-4 text-foreground">AI Confidence Score</h4>
        <div className="h-48 flex items-end justify-between gap-2">
          {[72, 78, 82, 85, 88, 91, 94].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-chart-4 rounded-t transition-all hover:bg-chart-4/80"
                style={{ height: `${value}%` }}
              />
              <span className="text-xs text-muted-foreground">
                W{index + 1}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
