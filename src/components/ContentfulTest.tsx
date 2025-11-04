import { useFeaturedProjects, useProjects } from "@/hooks/useContentful";
import { ContentfulService } from "@/lib/contentful-service";

const ContentfulTest = () => {
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useProjects();

  // Log Contentful data to the console when loaded
  if (projects) {
    console.log("All Contentful Projects:", projects);
  }

  if (projectsLoading) {
    return <div className="p-4">Loading projects from Contentful...</div>;
  }

  if (projectsError) {
    return (
      <div className="p-4 text-red-600">
        <h3>Error connecting to Contentful:</h3>
        <p>{projectsError.message}</p>
        <p className="mt-2 text-sm">
          Make sure you've configured your Contentful credentials in the .env
          file.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contentful Integration Test</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          All Projects ({projects?.length || 0})
        </h3>
        {projects && projects.length > 0 ? (
          <div className="grid gap-4">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {projects.map((project: any) => (
              <div key={project.sys.id} className="border p-4 rounded">
                <h4 className="font-medium">{project.fields.title}</h4>
                <p className="text-sm text-gray-600">
                  {project.fields.description}
                </p>
                {project.fields.image && (
                  <img
                    src={ContentfulService.getAssetUrl(
                      project.fields.featuredImage.fields.file.url
                    )}
                    alt={project.fields.title}
                    className="mt-2 max-w-xs"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No projects found. Create some in your Contentful space!</p>
        )}
      </div>
    </div>
  );
};

export default ContentfulTest;
