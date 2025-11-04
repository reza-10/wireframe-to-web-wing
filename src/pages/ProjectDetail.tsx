/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useProject } from "@/hooks/useContentful";
import { RenderContentfulRichText } from "@/lib/contentful-helper";
import { ContentfulService } from "@/lib/contentful-service";
import Lottie from "lottie-react";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const {
    data: contentfulProject,
    isLoading,
    error,
  } = useProject(projectId || "");

  // Transform Contentful data to match UI
  let project: any = null;
  if (contentfulProject) {
    project = {
      year: new Date(contentfulProject?.fields?.date).getFullYear().toString(),
      title: contentfulProject?.fields?.title || "Untitled Project",
      description:
        contentfulProject?.fields?.description?.content?.[0]?.content?.[0]
          ?.value || "No description.",
      thumbnail: contentfulProject?.fields?.thumbnail,
      background: contentfulProject?.fields?.background || "",
      research: contentfulProject?.fields?.research || "",
      ideation: contentfulProject?.fields?.ideation || "",
      ideationDetail: contentfulProject?.fields?.ideation1 || null,
      result: contentfulProject?.fields?.result || null,
      featuredImage: contentfulProject?.fields?.featuredImage || null,
      imagesGallery: contentfulProject?.fields?.imagesGallery || [],
    };
  }

  console.log({ project });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pl-56 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading project...</h2>
        </div>
      </div>
    );
  }

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
            <span>{project.year}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

          {/* Hero Image */}
          <div className="mb-16 bg-secondary rounded-lg overflow-hidden aspect-[16/9] flex items-center justify-center">
            <Lottie
              animationData={project.thumbnail}
              loop={true}
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-3">
              <Markdown remarkPlugins={[remarkGfm]}>
                {project.background}
              </Markdown>
            </div>

            <div className="space-y-3">
              <Markdown remarkPlugins={[remarkGfm]}>
                {project.research}
              </Markdown>
            </div>

            <div className="space-y-3 flex flex-col">
              <Markdown remarkPlugins={[remarkGfm]}>
                {project.ideation}
              </Markdown>

              <RenderContentfulRichText doc={project.ideationDetail} />
            </div>

            <div className="flex items-center gap-6">
              {project?.imagesGallery?.map((image: any, index: number) => (
                <div
                  key={index}
                  className="mb-4 bg-secondary rounded-lg overflow-hidden aspect-[16/9] flex items-center justify-center"
                >
                  <img
                    src={ContentfulService.getAssetUrl(image)}
                    alt={image.fields.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* <RenderContentfulRichText doc={project.result} /> */}

            {/* <RenderContentfulRichText doc={project.imagesGallery} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
