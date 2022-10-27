import PostContent from 'components/common/PostContent'
import type { Post } from 'types/Post'

export type PostPathPageProps = {
  post: Post
}

function PostPathPage({ post }: PostPathPageProps) {
  return <PostContent post={post} />
}

export default PostPathPage
