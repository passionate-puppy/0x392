import { run } from '@mdx-js/mdx'
import { Fragment, useEffect, useState } from 'react'
import * as runtime from 'react/jsx-runtime'
import type { Post } from 'types/Post'

export type PostContentProps = {
  post: Post
}

function PostContent({ post }: PostContentProps) {
  // @see https://mdxjs.com/guides/mdx-on-demand/
  const [mdxModule, setMdxModule] = useState<any>(null)
  const Content = mdxModule ? mdxModule.default : Fragment

  useEffect(() => {
    ;(async () => {
      setMdxModule(await run(post.code, runtime))
    })()
  }, [post.code])

  return <Content />
}

export default PostContent
