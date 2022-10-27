import PostPathPage from 'components/pages/PostPathPage'
import { getPost } from 'modules/server'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { Post } from 'types/Post'

export type PathProps = {
  post: Post
}

export type PathParams = {
  postPath: string
}

const Path: NextPage<PathProps> = ({ post }) => {
  return <PostPathPage post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // @todo
      { params: { postPath: 'hello-world' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PathProps, PathParams> = async (
  context
) => {
  const { params } = context
  const postPath = params?.postPath || null
  const post = await getPost(postPath)

  return {
    props: {
      post,
    },
  }
}

export default Path
