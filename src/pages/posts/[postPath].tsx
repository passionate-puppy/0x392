import PostPathPage from 'components/pages/PostPathPage'
import { getAllPostData, getPostPaths } from 'modules/server'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { Post } from 'types/Post'

export type PathProps = {
  post: Post | null
}

export type PathParams = {
  postPath: string
}

const Path: NextPage<PathProps> = ({ post }) => {
  return <PostPathPage post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postPaths = getPostPaths()
  const paths = postPaths.map((postPath) => ({
    params: { postPath },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PathProps, PathParams> = async (
  context
) => {
  const allPostData = await getAllPostData()
  const { params } = context
  const postPath = params?.postPath || null
  const post = allPostData.find((postData) => postData.postPath === postPath) || null

  return {
    props: {
      post,
    },
  }
}

export default Path
