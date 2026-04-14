import { client, urlFor } from './sanity'

export interface SanityBlogPost {
  _id: string
  title: string
  slug: { current: string }
  language: string
  excerpt: string
  content: any[] // Portable Text
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

// Portable Text to plain text converter
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

// Get all blog posts from Sanity
export async function getSanityBlogPosts(lang: string = 'th'): Promise<SanityBlogPost[]> {
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
    const posts = await client.fetch(query, { lang })
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error)
    return []
  }
}

// Get a single blog post by slug
export async function getSanityBlogPost(lang: string, slug: string): Promise<SanityBlogPost | null> {
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
    const post = await client.fetch(query, { lang, slug })
    return post || null
  } catch (error) {
    console.error('Error fetching blog post from Sanity:', error)
    return null
  }
}

// Convert Sanity blog post to app BlogPost format
export function sanityPostToBlogPost(post: SanityBlogPost) {
  const imageUrl = post.image?.asset?.url || (post.image ? urlFor(post.image).width(800).height(600).url() : '')

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

// Check if Sanity is configured (has valid project ID)
export function isSanityConfigured(): boolean {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  return !!projectId && projectId !== 'YOUR_PROJECT_ID' && projectId.length > 0
}