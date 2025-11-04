import { ContentfulService } from "@/lib/contentful-service";
import { useQuery } from "@tanstack/react-query";

// Hook to fetch all projects
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: ContentfulService.getProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to fetch featured projects
export const useFeaturedProjects = () => {
  return useQuery({
    queryKey: ["projects", "featured"],
    queryFn: ContentfulService.getFeaturedProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to fetch single project by slug
export const useProject = (slug: string) => {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => ContentfulService.getProjectBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to fetch all blog posts
export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: ContentfulService.getBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to fetch single blog post by slug
export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => ContentfulService.getBlogPostBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to search content
export const useSearchContent = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => ContentfulService.searchContent(query),
    enabled: !!query && query.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
