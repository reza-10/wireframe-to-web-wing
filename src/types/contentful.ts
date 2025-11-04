import { Asset, Entry, EntrySkeletonType } from "contentful";

// Define your content model types here
// These should match your Contentful content types

export interface ProjectSkeleton extends EntrySkeletonType {
  contentTypeId: "project";
  fields: {
    title: string;
    description: string;
    image: Asset;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    slug: string;
    content?: string;
  };
}

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: {
    title: string;
    content: string;
    excerpt: string;
    publishDate: string;
    author: string;
    featuredImage: Asset;
    slug: string;
    tags: string[];
  };
}

// Export the entry types
export type ProjectEntry = Entry<ProjectSkeleton>;
export type BlogPostEntry = Entry<BlogPostSkeleton>;

// Generic content entry type
export interface ContentfulEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: Record<string, unknown>;
}
