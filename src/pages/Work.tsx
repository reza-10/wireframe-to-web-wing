import showreelAnimation from "@/assets/animations/showreel.json";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/hooks/useContentful";
import { ContentfulService } from "@/lib/contentful-service";

const Work = () => {
  const { data: contentfulProjects, isLoading, error } = useProjects();

  // Fallback projects (your existing data)
  const fallbackProjects = [
    {
      projectId: "axis",
      image: showreelAnimation,
      company: "AXIS",
      year: "2024",
      title: "Improve AXIS Discovery Package Page",
      metrics: [{ value: "69.11% Increase", label: "Conversion Rate" }],
    },
    {
      projectId: "bdd-app",
      image: "/placeholder.svg",
      company: "BDD App",
      year: "2023",
      title: "Increase BDD 2023 User Engagement",
      metrics: [
        { value: "163% Increase", label: "event viewed" },
        { value: "+23% Increase", label: "average engagement time" },
      ],
    },
    {
      projectId: "technoplast",
      image: "/placeholder.svg",
      company: "Technoplast",
      year: "2022",
      title: "Digitizing Technoplast's Warehouse",
      metrics: [
        {
          value: "100% Transforming",
          label: "all manual warehouse processes to digital",
        },
      ],
    },
  ];

  // Transform Contentful projects to match your component structure

  const transformedProjects =
    contentfulProjects?.map((project: any) => ({
      projectId: project.fields.slug || project.sys.id,
      client: project.fields.client,
      date: new Date(project.fields.date).getFullYear().toString(),
      title: project.fields.title || "Untitled Project",
      metrics: project.fields.metrics || [],
      thumbnail: project.fields.thumbnail,
    })) || [];

  // Use Contentful projects if available, otherwise fallback
  const projects =
    contentfulProjects && contentfulProjects.length > 0
      ? transformedProjects
      : fallbackProjects;

  if (error) {
    console.error("Error loading projects from Contentful:", error);
  }

  return (
    <div className="min-h-screen bg-background pl-56">
      <div className="mx-auto p-12">
        <h2 className="text-sm font-semibold text-muted-foreground mb-8 tracking-wide">
          WORKS
          {isLoading && (
            <span className="ml-2 text-xs text-muted-foreground/60">
              (Loading from Contentful...)
            </span>
          )}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.projectId || index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
