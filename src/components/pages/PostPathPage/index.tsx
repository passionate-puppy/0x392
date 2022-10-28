import Author from 'components/common/Author'
import Layout from 'components/common/Layout'
import PostContent from 'components/common/PostContent'
import PostHeader from 'components/common/PostHeader'
import SiteHeader from 'components/common/SiteHeader'
import styles from './PostPathPage.module.scss'
import type { Post } from 'types/Post'

export type PostPathPageProps = {
  post: Post
}

function PostPathPage({ post }: PostPathPageProps) {
  const {
    content,
    meta,
  } = post

  return (
    <Layout>
      <SiteHeader theme="secondary" />
      <div className={styles.postHeader}>
        <PostHeader meta={meta} />
      </div>
      <div className={styles.postContent}>
        <PostContent content={content} />
      </div>
      <div className={styles.author}>
        <Author />
      </div>
    </Layout>
  )
}

export default PostPathPage
