import { client, urlFor } from './sanity'
import { blogPosts as staticBlogPosts, BlogPost } from '@/content/blog'

export interface SanityBlogPost {
  _id: string
  title: string
  slug: { current: string }
  language: string
  excerpt: string
  content: any[]
  publishedAt: string
  category: string
  image?: {
    asset: {
      _ref: string
      url?: string
    }
    alt?: string
  }
}

// Check if Sanity is configured
function isSanityConfigured(): boolean {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  return !!(projectId && projectId !== 'YOUR_PROJECT_ID' && projectId.length > 0)
}

// Convert Portable Text to plain string
function portableTextToString(content: any[]): string {
  if (!content) return ''
  return content
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) return ''
      return block.children
        .map((child: any) => child.text || '')
        .join('')
    })
    .join('\n\n')
}

// Convert Sanity post to BlogPost format
function sanityPostToBlogPost(post: SanityBlogPost): BlogPost {
  const asset = post.image?.asset
  let imageUrl = ''
  if (asset?.url) {
    imageUrl = asset.url
  } else if (post.image) {
    try {
      imageUrl = urlFor(post.image as any).width(800).height(600).url()
    } catch {
      imageUrl = ''
    }
  }

  return {
    slug: post.slug.current,
    title: post.title,
    excerpt: post.excerpt,
    content: portableTextToString(post.content),
    date: post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    category: post.category || 'General Information',
    imageUrl: imageUrl,
    imageAlt: post.image?.alt || post.title,
  }
}

// Get blog posts - tries Sanity first, falls back to static
export async function getBlogPosts(lang: string): Promise<BlogPost[]> {
  // Try Sanity first
  if (isSanityConfigured()) {
    try {
      const query = `*[_type == "blogPost" && language == $lang] | order(publishedAt desc) {
        _id,
        title,
        slug,
        language,
        excerpt,
        content,
        publishedAt,
        category,
        image {
          asset,
          alt
        }
      }`
      const posts = await client.fetch<SanityBlogPost[]>(query, { lang })
      if (posts && posts.length > 0) {
        return posts.map(sanityPostToBlogPost)
      }
    } catch (error) {
      console.error('Sanity fetch failed, using static data:', error)
    }
  }

  // Fall back to static data
  return staticBlogPosts[lang] || staticBlogPosts.th || []
}

// Get a single blog post by slug
export async function getBlogPost(lang: string, slug: string): Promise<BlogPost | undefined> {
  // Try Sanity first
  if (isSanityConfigured()) {
    try {
      const query = `*[_type == "blogPost" && language == $lang && slug.current == $slug][0] {
        _id,
        title,
        slug,
        language,
        excerpt,
        content,
        publishedAt,
        category,
        image {
          asset,
          alt
        }
      }`
      const post = await client.fetch<SanityBlogPost>(query, { lang, slug })
      if (post) {
        return sanityPostToBlogPost(post)
      }
    } catch (error) {
      console.error('Sanity single post fetch failed, using static data:', error)
    }
  }

  // Fall back to static data
  const posts = staticBlogPosts[lang] || staticBlogPosts.th || []
  return posts.find(post => post.slug === slug)
}

export { isSanityConfigured }