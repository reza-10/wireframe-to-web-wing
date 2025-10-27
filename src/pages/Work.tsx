import ProjectCard from "@/components/ProjectCard";
import showreelAnimation from "@/assets/animations/showreel.json";

const Work = () => {
  const projects = [
    {
      image: showreelAnimation,
      company: "AXIS",
      year: "2024",
      title: "Improve AXIS Discovery Package Page",
      metrics: [
        { value: "69.11% Increase", label: "Conversion Rate" }
      ]
    },
    {
      image: "/placeholder.svg",
      company: "BDD App",
      year: "2023",
      title: "Increase BDD 2023 User Engagement",
      metrics: [
        { value: "163% Increase", label: "event viewed" },
        { value: "+23% Increase", label: "average engagement time" }
      ]
    },
    {
      image: "/placeholder.svg",
      company: "Technoplast",
      year: "2022",
      title: "Digitizing Technoplast's Warehouse",
      metrics: [
        { value: "100% Transforming", label: "all manual warehouse processes to digital" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pl-56">
      <div className="max-w-7xl mx-auto p-12">
        <h2 className="text-sm font-semibold text-muted-foreground mb-8 tracking-wide">
          WORKS
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
