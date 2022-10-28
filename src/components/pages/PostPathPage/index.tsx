import Author from 'components/common/Author'
import Layout from 'components/common/Layout'
import PostContent from 'components/common/PostContent'
import PostTitle from 'components/common/PostTitle'
import SiteHeader from 'components/common/SiteHeader'
import styles from './PostPathPage.module.scss'
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
      <SiteHeader theme="secondary" />
      <div className={styles.title}>
        <PostTitle>{title}</PostTitle>
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
