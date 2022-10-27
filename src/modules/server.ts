import { compile } from '@mdx-js/mdx'
import fs from 'fs'
import path from 'path'
import type { Post } from 'types/Post'
import type { PostPreview } from 'types/PostPreview'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export async function getPostPreviewList() {
  const directoryList = fs.readdirSync(postsDirectory)

  const postPreviewList: PostPreview[] = await Promise.all(
    directoryList.map(async (directoryName) => {
      const postPath = directoryName
      const meta = await getPostMeta(postPath)

      return {
        meta,
        postPath,
      }
    })
  )

  return postPreviewList
}

export async function getPostMeta(postPath: string) {
  // @see https://mdxjs.com/packages/node-loader/
  const { meta } = await import(`../posts/${postPath}/index.mdx`)

  return {
    title: meta?.title,
    date: meta?.date,
    spoiler: meta?.spoiler,
  }
}

export async function getPost(postPath: string | null) {
  if (typeof postPath !== 'string') {
    throw new Error('`postPath` should be string.')
  }

  const fullPath = path.join(postsDirectory, postPath, 'index.mdx')
  const fileContent = fs.readFileSync(fullPath, 'utf-8').toString()

  // @see https://mdxjs.com/guides/mdx-on-demand/
  const code = String(
    await compile(fileContent, { outputFormat: 'function-body' })
  )
  const meta = await getPostMeta(postPath)

  const post: Post = {
    code,
    meta,
  }

  return post
}
