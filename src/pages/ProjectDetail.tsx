import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import showreelAnimation from "@/assets/animations/showreel.json";
import Lottie from "lottie-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Project data - in a real app this would come from an API or database
  const projectData: Record<string, any> = {
    axis: {
      company: "AXIS",
      year: "2024",
      title: "Improve AXIS Discovery Package Page",
      description: "A comprehensive redesign of the AXIS Discovery Package page to improve conversion rates and user engagement.",
      challenge: "The existing package page had a low conversion rate and users were having difficulty understanding the value proposition and navigating through the booking process.",
      solution: "We redesigned the entire user flow with a focus on clarity, visual hierarchy, and reducing friction in the booking process. The new design features improved information architecture, clearer pricing display, and a streamlined checkout experience.",
      results: [
        { metric: "69.11%", description: "Increase in Conversion Rate" },
        { metric: "45%", description: "Reduction in bounce rate" },
        { metric: "32%", description: "Increase in average session duration" }
      ],
      animation: showreelAnimation
    }
  };

  const project = projectData[projectId || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-background pl-56 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button onClick={() => navigate("/")}>Back to Work</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pl-56">
      <div className="max-w-6xl mx-auto p-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>{project.company}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Animation/Hero Image */}
        <div className="mb-16 bg-secondary rounded-lg overflow-hidden aspect-[16/9] flex items-center justify-center">
          <Lottie 
            animationData={project.animation}
            loop={true}
            className="w-full h-full"
          />
        </div>

        {/* Challenge Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results.map((result: any, index: number) => (
              <div key={index} className="p-6 bg-card rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">
                  {result.metric}
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Images Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Design Process</h2>
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg aspect-[16/9] flex items-center justify-center">
              <Lottie 
                animationData={project.animation}
                loop={true}
                className="w-2/3 h-2/3"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center">
                <Lottie 
                  animationData={project.animation}
                  loop={true}
                  className="w-2/3 h-2/3"
                />
              </div>
              <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center">
                <Lottie 
                  animationData={project.animation}
                  loop={true}
                  className="w-2/3 h-2/3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
