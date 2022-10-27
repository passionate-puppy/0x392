import Author from 'components/common/Author'
import Header from 'components/common/Header'
import Layout from 'components/common/Layout'
import PostPreviewList from 'components/common/PostPreviewList'
import SocialLinks from 'components/common/SocialLinks'
import styles from './IndexPage.module.scss'
import type { PostPreview } from 'types/PostPreview'

export type IndexPageProps = {
  postPreviewList: PostPreview[]
}

function IndexPage({ postPreviewList }: IndexPageProps) {
  return (
    <Layout>
      <Header theme="primary" />
      <div className={styles.author}>
        <Author />
      </div>
      <div className={styles.postPreviewList}>
        <PostPreviewList postPreviewList={postPreviewList} />
      </div>
      <div className={styles.socialLinks}>
        <SocialLinks />
      </div>
    </Layout>
  )
}

export default IndexPage
