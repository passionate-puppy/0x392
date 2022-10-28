import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import type { PostPreview } from 'types/PostPreview'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export async function getPost(postPath: string | null) {
  if (typeof postPath !== 'string') {
    throw new Error('`postPath` should be string.')
  }

  const fullPath = path.join(postsDirectory, postPath, 'index.md')
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const {
    content,
    data: frontmatter,
  } = matter(fileContent)

  const meta = {
    title: frontmatter?.title,
    date: frontmatter?.date,
    spoiler: frontmatter?.spoiler,
  }

  return {
    content,
    meta,
  }
}

export async function getPostMeta(postPath: string) {
  return (await getPost(postPath)).meta
}

export function getPostPaths() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostMetaList() {
  const postPaths = getPostPaths()

  const postPreviewList: PostPreview[] = await Promise.all(
    postPaths.map(async (postPath) => {
      const meta = await getPostMeta(postPath)

      return {
        meta,
        postPath,
      }
    })
  )

  return postPreviewList
}
