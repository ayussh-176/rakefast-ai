import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export const SimulationResults = () => {
  const kpis = [
    {
      label: "Utilization",
      value: "96%",
      change: "+8%",
      trend: "up",
      color: "text-success"
    },
    {
      label: "Avg Delay",
      value: "12 min",
      change: "-40%",
      trend: "down",
      color: "text-success"
    },
    {
      label: "Cost/Trip",
      value: "₹2.4L",
      change: "-15%",
      trend: "down",
      color: "text-success"
    },
    {
      label: "Efficiency",
      value: "94.2%",
      change: "+12%",
      trend: "up",
      color: "text-success"
    }
  ];

  return (
    <div className="space-y-4">
      {kpis.map((kpi, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{kpi.label}</span>
            <Badge variant="secondary" className="text-xs">
              {kpi.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1" />
              )}
              {kpi.change}
            </Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{kpi.value}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500"
              style={{ width: kpi.value.replace('%', '').replace(' min', '').replace('₹', '').replace('L', '') + '%' }}
            />
          </div>
        </div>
      ))}

      <div className="pt-4 border-t border-border">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium text-foreground">Simulation Status</span>
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Runtime</span>
            <span className="text-foreground font-medium">18.4 min</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Iterations</span>
            <span className="text-foreground font-medium">10,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Convergence</span>
            <span className="text-success font-medium">98.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
