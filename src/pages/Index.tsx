import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Train, Brain, TrendingUp, Users, Database, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with FOIS and stockyard data for real-time optimization"
    },
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description: "TensorFlow RL and Google OR-Tools for intelligent rake formation decisions"
    },
    {
      icon: BarChart3,
      title: "Simulation & Analysis",
      description: "SimPy-based simulation to evaluate formations before deployment"
    },
    {
      icon: Users,
      title: "Human-in-Loop",
      description: "Collaborative decision-making with AI suggestions and manual overrides"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Train className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SAIL RakeOptimizer</h1>
                <p className="text-xs text-muted-foreground">AI-Driven Formation System</p>
              </div>
            </div>
            <Badge className="bg-accent text-accent-foreground">v1.0 Beta</Badge>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intelligent Rake Formation Optimization
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Leverage AI/ML to optimize train wagon combinations, minimize delays, 
            and maximize utilization across Indian Railways freight operations
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/dashboard')}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Launch Dashboard
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-accent transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Utilization Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Delay Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Daily Optimizations</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
