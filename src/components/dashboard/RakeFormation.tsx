import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Train, TrendingUp } from "lucide-react";

interface RakeFormationProps {
  status: 'idle' | 'processing' | 'complete';
}

export const RakeFormation = ({ status }: RakeFormationProps) => {
  const mockFormations = [
    {
      id: 1,
      name: "Formation A (Recommended)",
      score: 94,
      wagons: ["BOX-12", "BOXN-8", "BCN-15", "BCNA-10"],
      utilization: 96,
      estimatedDelay: 12,
      cost: "₹2.4L"
    },
    {
      id: 2,
      name: "Formation B",
      score: 89,
      wagons: ["BOX-10", "BOXN-10", "BCN-12", "BCNA-12"],
      utilization: 92,
      estimatedDelay: 18,
      cost: "₹2.6L"
    },
    {
      id: 3,
      name: "Formation C",
      score: 85,
      wagons: ["BOX-15", "BOXN-6", "BCN-14", "BCNA-9"],
      utilization: 89,
      estimatedDelay: 15,
      cost: "₹2.5L"
    }
  ];

  if (status === 'idle') {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
        <Train className="h-12 w-12 mb-4 opacity-50" />
        <p className="text-sm">Run optimization to generate rake formations</p>
      </div>
    );
  }

  if (status === 'processing') {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-sm">Optimizing rake formations...</p>
        <p className="text-xs mt-2">Using OR-Tools + TensorFlow RL</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {mockFormations.map((formation) => (
        <Card 
          key={formation.id} 
          className={`p-4 cursor-pointer transition-all hover:border-accent ${
            formation.id === 1 ? 'border-accent bg-accent/5' : ''
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-semibold text-sm text-foreground">{formation.name}</h4>
              <div className="flex gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  Score: {formation.score}
                </Badge>
                {formation.id === 1 && (
                  <Badge className="text-xs bg-accent text-accent-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Best
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-1 mb-3">
            {formation.wagons.map((wagon, idx) => (
              <div 
                key={idx} 
                className="flex-1 h-8 bg-primary/10 border border-primary/30 rounded flex items-center justify-center text-xs font-mono text-primary"
              >
                {wagon}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="text-muted-foreground">Utilization</span>
              <p className="font-semibold text-foreground">{formation.utilization}%</p>
            </div>
            <div>
              <span className="text-muted-foreground">Delay (min)</span>
              <p className="font-semibold text-foreground">{formation.estimatedDelay}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Cost</span>
              <p className="font-semibold text-foreground">{formation.cost}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
