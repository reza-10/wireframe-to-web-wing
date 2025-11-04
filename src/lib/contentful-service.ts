import client from "@/lib/contentful";

export class ContentfulService {
  // Fetch all projects
  static async getProjects() {
    try {
      const response = await client.getEntries({
        content_type: "portfolio",
      });
      return response.items;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }

  // Fetch featured projects
  static async getFeaturedProjects() {
    try {
      const response = await client.getEntries({
        content_type: "portfolio",
      });

      console.log(response);
      // Filter featured projects on the client side
      return response.items.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item.fields.featured === true
      );
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      throw error;
    }
  }

  // Fetch single portfolio by slug
  static async getProjectBySlug(slug: string) {
    try {
      const response = await client.getEntries({
        content_type: "portfolio",
      });

      const portfolio = response.items.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item.fields.slug === slug
      );

      return portfolio || null;
    } catch (error) {
      console.error(`Error fetching portfolio with slug ${slug}:`, error);
      throw error;
    }
  }

  // Fetch all blog posts
  static async getBlogPosts() {
    try {
      const response = await client.getEntries({
        content_type: "blogPost",
        order: ["-sys.createdAt"],
      });
      return response.items;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw error;
    }
  }

  // Fetch single blog post by slug
  static async getBlogPostBySlug(slug: string) {
    try {
      const response = await client.getEntries({
        content_type: "blogPost",
      });

      const blogPost = response.items.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item.fields.slug === slug
      );

      return blogPost || null;
    } catch (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error);
      throw error;
    }
  }

  // Search content
  static async searchContent(query: string) {
    try {
      const [projectsResponse, blogPostsResponse] = await Promise.all([
        client.getEntries({
          content_type: "portfolio",
          query: query,
        }),
        client.getEntries({
          content_type: "blogPost",
          query: query,
        }),
      ]);

      return [...projectsResponse.items, ...blogPostsResponse.items];
    } catch (error) {
      console.error("Error searching content:", error);
      throw error;
    }
  }

  // Helper to get asset URL
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getAssetUrl(asset: any): string {
    return asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : "";
  }
}
