import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import type { Post } from 'types/Post'

const postsDirectory = path.join(process.cwd(), 'src/posts')

function getPostData(postPath: string): Post {
  const fullPath = path.join(postsDirectory, postPath, 'index.md')
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const { content, data: frontmatter } = matter(fileContent)

  const meta = {
    title: frontmatter?.title,
    date: frontmatter?.date,
    spoiler: frontmatter?.spoiler,
  }

  return { content, meta, postPath }
}

export function getPostPaths() {
  return fs.readdirSync(postsDirectory)
}

export async function getAllPostData() {
  const postPaths = getPostPaths()
  const allPostData = await Promise.all(
    postPaths.map((postPath) => getPostData(postPath))
  )
  allPostData.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
  return allPostData
}
