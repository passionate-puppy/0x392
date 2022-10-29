import Author from 'components/common/Author'
import Layout from 'components/common/Layout'
import PostContent from 'components/common/PostContent'
import PostHeader from 'components/common/PostHeader'
import SiblingPosts from 'components/common/SiblingPosts'
import config from 'config'
import routes from 'modules/routes'
import Link from 'next/link'
import styles from './PostPathPage.module.scss'
import type { Post } from 'types/Post'

export type PostPathPageProps = {
  post: Post | null
  siblingPosts: {
    nextPost: Post | null
    prevPost: Post | null
  }
}

function PostPathPage({ post, siblingPosts }: PostPathPageProps) {
  if (!post) {
    return null
  }

  const {
    content,
    meta,
  } = post

  const description = post.meta.spoiler
  const title = `${post.meta.title} — ${config.meta.titlePrefix}`

  return (
    <Layout description={description} title={title}>
      <div className={styles.title}>
        <Link href={routes.home()}>{config.title}</Link>
      </div>
      <div className={styles.postHeader}>
        <PostHeader meta={meta} />
      </div>
      <div className={styles.postContent}>
        <PostContent content={content} />
      </div>
      <div className={styles.author}>
        <Author />
      </div>
      <div className={styles.siblingPosts}>
        <SiblingPosts siblingPosts={siblingPosts} />
      </div>
    </Layout>
  )
}

export default PostPathPage
