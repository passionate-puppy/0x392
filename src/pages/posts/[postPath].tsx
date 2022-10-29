import PostPathPage from 'components/pages/PostPathPage'
import { getAllPostData, getPostPaths } from 'modules/server'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { Post } from 'types/Post'

export type PathProps = {
  post: Post | null
  siblingPosts: {
    nextPost: Post | null
    prevPost: Post | null
  }
}

export type PathParams = {
  postPath: string
}

const Path: NextPage<PathProps> = ({ post, siblingPosts }) => {
  return <PostPathPage post={post} siblingPosts={siblingPosts} />
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

  const indexOfPost = postPath
    ? allPostData.map((postData) => postData.postPath).indexOf(postPath)
    : null

  const post = indexOfPost !== null ? allPostData[indexOfPost] : null

  let nextPost: Post | null = null
  let prevPost: Post | null = null
  if (indexOfPost !== null) {
    if (indexOfPost - 1 >= 0) {
      nextPost = allPostData[indexOfPost - 1]
    }
    if (indexOfPost + 1 < allPostData.length) {
      prevPost = allPostData[indexOfPost + 1]
    }
  }

  const siblingPosts = { nextPost, prevPost }

  return {
    props: {
      post,
      siblingPosts,
    },
  }
}

export default Path
