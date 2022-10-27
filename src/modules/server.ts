import config from 'config'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import type { PostPreview } from 'types/PostPreview'

export function getPostPreviewList() {
  const postsDirectory = path.join(process.cwd(), config.postsDirectory)

  const directoryList = fs.readdirSync(postsDirectory)

  const postPreviewList: PostPreview[] = directoryList.map((directoryName) => {
    const fullPath = path.join(postsDirectory, directoryName, 'index.mdx')
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContent)

    return {
      meta: {
        title: matterResult.data?.title,
        date: matterResult.data?.date,
        spoiler: matterResult.data?.spoiler,
      },
      path: directoryName,
    }
  })

  return postPreviewList
}
