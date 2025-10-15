import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Train, Brain, TrendingUp, Users, Database, BarChart3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Train className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">RakeMitra</h1>
                <p className="text-xs text-muted-foreground">AI-Driven Formation System</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg">v1.0 Beta</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Intelligent Rake Formation
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">Optimization</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Leverage AI/ML to optimize train wagon combinations, minimize delays, 
            and maximize utilization across Indian Railways freight operations
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg"
              onClick={() => navigate('/dashboard')}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Launch Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="shadow-sm hover:shadow-lg transition-shadow">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-accent transition-all hover:shadow-lg hover:scale-105 duration-200 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-4 shadow-md">
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
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">95%</div>
            <div className="text-sm text-muted-foreground font-medium">Utilization Rate</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">40%</div>
            <div className="text-sm text-muted-foreground font-medium">Delay Reduction</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
            <div className="text-4xl font-bold text-success mb-2">1000+</div>
            <div className="text-sm text-muted-foreground font-medium">Daily Optimizations</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
