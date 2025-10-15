import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Train, CheckCircle, XCircle, Upload, PlayCircle, RefreshCw } from "lucide-react";
import { DataUpload } from "@/components/dashboard/DataUpload";
import { RakeFormation } from "@/components/dashboard/RakeFormation";
import { SimulationResults } from "@/components/dashboard/SimulationResults";
import { KPICharts } from "@/components/dashboard/KPICharts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [optimizationStatus, setOptimizationStatus] = useState<'idle' | 'processing' | 'complete'>('idle');

  const handleApprove = () => {
    toast({
      title: "Plan Approved",
      description: "Rake formation has been approved and scheduled for deployment.",
      className: "bg-success text-success-foreground"
    });
    setOptimizationStatus('idle');
  };

  const handleModify = () => {
    toast({
      title: "Modification Mode",
      description: "Enter your modifications. The AI will retrain based on your feedback.",
      variant: "default"
    });
  };

  const startOptimization = () => {
    setOptimizationStatus('processing');
    setTimeout(() => {
      setOptimizationStatus('complete');
      toast({
        title: "Optimization Complete",
        description: "AI has generated 3 optimal rake formations for review.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Train className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">SAIL RakeOptimizer</h1>
                <p className="text-xs text-muted-foreground">Dashboard v1.0</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={optimizationStatus === 'processing' ? 'default' : 'secondary'}>
                {optimizationStatus === 'processing' && <RefreshCw className="mr-1 h-3 w-3 animate-spin" />}
                {optimizationStatus === 'idle' && 'Ready'}
                {optimizationStatus === 'processing' && 'Processing'}
                {optimizationStatus === 'complete' && 'Complete'}
              </Badge>
              <Button variant="outline" size="sm">Logout</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Panel - Data Input */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Data Input
                </CardTitle>
                <CardDescription>Upload FOIS & stockyard data</CardDescription>
              </CardHeader>
              <CardContent>
                <DataUpload />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  className="w-full" 
                  onClick={startOptimization}
                  disabled={optimizationStatus === 'processing'}
                >
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Run Optimization
                </Button>
                <Button variant="outline" className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Data
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Center Panel - AI Generated Plans */}
          <div className="lg:col-span-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  AI-Generated Rake Formations
                  {optimizationStatus === 'complete' && (
                    <Badge className="bg-accent text-accent-foreground">New</Badge>
                  )}
                </CardTitle>
                <CardDescription>
                  Top 3 optimal formations based on current constraints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RakeFormation status={optimizationStatus} />
              </CardContent>
            </Card>

            {/* Approval Actions */}
            {optimizationStatus === 'complete' && (
              <Card className="border-accent">
                <CardHeader>
                  <CardTitle className="text-base">Review & Approve</CardTitle>
                  <CardDescription>
                    Approve the AI recommendation or modify parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-3">
                  <Button 
                    className="flex-1 bg-success hover:bg-success/90"
                    onClick={handleApprove}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Approve Plan
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleModify}
                  >
                    <XCircle className="mr-2 h-4 w-4" />
                    Modify Plan
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Panel - Simulation & KPIs */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Simulation Results</CardTitle>
                <CardDescription>Real-time KPI monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <SimulationResults />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Detailed Analytics */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Historical trends and optimization metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="kpi" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="kpi">KPI Trends</TabsTrigger>
                  <TabsTrigger value="learning">Learning Curve</TabsTrigger>
                  <TabsTrigger value="logs">Activity Logs</TabsTrigger>
                </TabsList>
                <TabsContent value="kpi" className="mt-6">
                  <KPICharts />
                </TabsContent>
                <TabsContent value="learning" className="mt-6">
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Learning curve visualization (TensorFlow training metrics)
                  </div>
                </TabsContent>
                <TabsContent value="logs" className="mt-6">
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Real-time activity and optimization logs
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
