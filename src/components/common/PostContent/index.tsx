import type { Post } from 'types/Post'

export type PostContentProps = {
  post: Post
}

function PostContent({ post }: PostContentProps) {
  return <div>{post.content}</div>
}

export default PostContent
