import Author from 'components/common/Author'
import Header from 'components/common/Header'
import Layout from 'components/common/Layout'
import PostContent from 'components/common/PostContent'
import PostTitle from 'components/common/PostTitle'
import type { Post } from 'types/Post'

export type PostPathPageProps = {
  post: Post
}

function PostPathPage({ post }: PostPathPageProps) {
  const {
    content,
    meta: { title },
  } = post

  return (
    <Layout>
      <Header theme="secondary" />
      <PostTitle>{title}</PostTitle>
      <PostContent content={content} />
      <Author />
    </Layout>
  )
}

export default PostPathPage
