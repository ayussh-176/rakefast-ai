import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const LearningCurve = () => {
  const epochs = [
    { epoch: 1, trainLoss: 0.85, valLoss: 0.88, accuracy: 72 },
    { epoch: 5, trainLoss: 0.62, valLoss: 0.65, accuracy: 78 },
    { epoch: 10, trainLoss: 0.45, valLoss: 0.48, accuracy: 82 },
    { epoch: 15, trainLoss: 0.32, valLoss: 0.36, accuracy: 86 },
    { epoch: 20, trainLoss: 0.21, valLoss: 0.25, accuracy: 90 },
    { epoch: 25, trainLoss: 0.14, valLoss: 0.18, accuracy: 93 },
    { epoch: 30, trainLoss: 0.09, valLoss: 0.13, accuracy: 95 },
  ];

  const maxLoss = 1.0;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-chart-1/10 to-chart-1/5 border-chart-1/20">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Training Loss</p>
            <p className="text-2xl font-bold text-foreground">0.09</p>
            <Badge variant="secondary" className="text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              90% improved
            </Badge>
          </div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Validation Loss</p>
            <p className="text-2xl font-bold text-foreground">0.13</p>
            <Badge variant="secondary" className="text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              85% improved
            </Badge>
          </div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Model Accuracy</p>
            <p className="text-2xl font-bold text-foreground">95%</p>
            <Badge variant="secondary" className="text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              +23% gain
            </Badge>
          </div>
        </Card>
      </div>

      {/* Learning Curves */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Training vs Validation Loss */}
        <Card className="p-6">
          <h4 className="text-sm font-semibold mb-4 text-foreground">Training & Validation Loss</h4>
          <div className="space-y-3">
            {epochs.map((data, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Epoch {data.epoch}</span>
                  <span>Train: {data.trainLoss.toFixed(2)} | Val: {data.valLoss.toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-chart-1 transition-all duration-500 rounded-full"
                      style={{ width: `${((maxLoss - data.trainLoss) / maxLoss) * 100}%` }}
                    />
                  </div>
                  <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-chart-2 transition-all duration-500 rounded-full"
                      style={{ width: `${((maxLoss - data.valLoss) / maxLoss) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-1" />
              <span className="text-xs text-muted-foreground">Training Loss</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-chart-2" />
              <span className="text-xs text-muted-foreground">Validation Loss</span>
            </div>
          </div>
        </Card>

        {/* Model Accuracy Progress */}
        <Card className="p-6">
          <h4 className="text-sm font-semibold mb-4 text-foreground">Model Accuracy Progress</h4>
          <div className="h-64 flex items-end justify-between gap-2">
            {epochs.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full">
                  <div 
                    className="w-full bg-gradient-to-t from-chart-3 to-chart-3/60 rounded-t transition-all hover:from-chart-3/90 hover:to-chart-3/50 shadow-lg"
                    style={{ height: `${data.accuracy * 2.5}px` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  E{data.epoch}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Starting Accuracy</span>
              <span className="font-medium text-foreground">72%</span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-muted-foreground">Current Accuracy</span>
              <span className="font-medium text-success">95%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Training Metrics */}
      <Card className="p-6">
        <h4 className="text-sm font-semibold mb-4 text-foreground">Training Session Metrics</h4>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Total Epochs</p>
            <p className="text-xl font-bold text-foreground">30</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Training Time</p>
            <p className="text-xl font-bold text-foreground">24.3 min</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Batch Size</p>
            <p className="text-xl font-bold text-foreground">64</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Learning Rate</p>
            <p className="text-xl font-bold text-foreground">0.001</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
