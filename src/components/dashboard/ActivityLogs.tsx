import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, XCircle, Upload, PlayCircle, RefreshCw, AlertCircle, TrendingUp } from "lucide-react";

export const ActivityLogs = () => {
  const logs = [
    {
      id: 1,
      timestamp: "2025-10-15 14:32:18",
      type: "success",
      action: "Optimization Complete",
      description: "Generated 3 optimal rake formations with 96% utilization",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      id: 2,
      timestamp: "2025-10-15 14:30:45",
      type: "processing",
      action: "AI Model Training",
      description: "TensorFlow RL model updated with 150 new training samples",
      icon: RefreshCw,
      color: "text-accent"
    },
    {
      id: 3,
      timestamp: "2025-10-15 14:28:12",
      type: "success",
      action: "Plan Approved",
      description: "Formation Plan #247 approved by dispatcher S.Kumar",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      id: 4,
      timestamp: "2025-10-15 14:25:33",
      type: "info",
      action: "Data Upload",
      description: "FOIS data uploaded successfully - 2,450 records processed",
      icon: Upload,
      color: "text-chart-1"
    },
    {
      id: 5,
      timestamp: "2025-10-15 14:20:56",
      type: "success",
      action: "Simulation Complete",
      description: "SimPy runtime simulation completed in 18.4 minutes",
      icon: PlayCircle,
      color: "text-success"
    },
    {
      id: 6,
      timestamp: "2025-10-15 14:15:22",
      type: "warning",
      action: "Plan Modified",
      description: "User modified Formation Plan #246 - retraining triggered",
      icon: AlertCircle,
      color: "text-warning"
    },
    {
      id: 7,
      timestamp: "2025-10-15 14:10:08",
      type: "success",
      action: "KPI Update",
      description: "Weekly utilization improved to 96% (+8% from last week)",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      id: 8,
      timestamp: "2025-10-15 14:05:45",
      type: "error",
      action: "Validation Failed",
      description: "Formation Plan #245 rejected - capacity constraint violation",
      icon: XCircle,
      color: "text-destructive"
    },
    {
      id: 9,
      timestamp: "2025-10-15 14:00:12",
      type: "processing",
      action: "OR-Tools Running",
      description: "Google OR-Tools CP-SAT solver optimizing 45 wagon combinations",
      icon: RefreshCw,
      color: "text-accent"
    },
    {
      id: 10,
      timestamp: "2025-10-15 13:55:30",
      type: "success",
      action: "Data Sync",
      description: "Stockyard data synchronized from central database",
      icon: CheckCircle,
      color: "text-success"
    },
    {
      id: 11,
      timestamp: "2025-10-15 13:50:18",
      type: "info",
      action: "System Health Check",
      description: "All systems operational - 99.8% uptime this week",
      icon: CheckCircle,
      color: "text-chart-2"
    },
    {
      id: 12,
      timestamp: "2025-10-15 13:45:42",
      type: "success",
      action: "Model Convergence",
      description: "RL model achieved 98.7% convergence after 10,000 iterations",
      icon: TrendingUp,
      color: "text-success"
    }
  ];

  const getVariant = (type: string) => {
    switch (type) {
      case "success":
        return "default";
      case "error":
        return "destructive";
      case "warning":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-4">
      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-xs text-muted-foreground mb-1">Total Activities</p>
          <p className="text-2xl font-bold text-foreground">{logs.length}</p>
        </Card>
        <Card className="p-4 bg-success/5 border-success/20">
          <p className="text-xs text-muted-foreground mb-1">Successful</p>
          <p className="text-2xl font-bold text-success">
            {logs.filter(l => l.type === 'success').length}
          </p>
        </Card>
        <Card className="p-4 bg-warning/5 border-warning/20">
          <p className="text-xs text-muted-foreground mb-1">Warnings</p>
          <p className="text-2xl font-bold text-warning">
            {logs.filter(l => l.type === 'warning').length}
          </p>
        </Card>
        <Card className="p-4 bg-destructive/5 border-destructive/20">
          <p className="text-xs text-muted-foreground mb-1">Errors</p>
          <p className="text-2xl font-bold text-destructive">
            {logs.filter(l => l.type === 'error').length}
          </p>
        </Card>
      </div>

      {/* Activity Log List */}
      <Card className="p-6">
        <h4 className="text-sm font-semibold mb-4 text-foreground">Recent Activity</h4>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-3">
            {logs.map((log) => {
              const Icon = log.icon;
              return (
                <div 
                  key={log.id} 
                  className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors"
                >
                  <div className={`h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 ${log.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm text-foreground">{log.action}</p>
                      <Badge variant={getVariant(log.type)} className="text-xs">
                        {log.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{log.description}</p>
                    <p className="text-xs text-muted-foreground/70">{log.timestamp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};
