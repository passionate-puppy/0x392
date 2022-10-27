import fs from 'fs'
import path from 'path'
import type { PostPreview } from 'types/PostPreview'

export async function getPostPreviewList() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')

  const directoryList = fs.readdirSync(postsDirectory)

  const postPreviewList: PostPreview[] = await Promise.all(
    directoryList.map(async (directoryName) => {
      const { meta } = await import(`../posts/${directoryName}/index.mdx`)

      return {
        meta: {
          title: meta?.title,
          date: meta?.date,
          spoiler: meta?.spoiler,
        },
        postPath: directoryName,
      }
    })
  )

  return postPreviewList
}
