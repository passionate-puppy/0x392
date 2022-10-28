import Author from 'components/common/Author'
import Layout from 'components/common/Layout'
import PostPreviewList from 'components/common/PostPreviewList'
import SocialLinks from 'components/common/SocialLinks'
import config from 'config'
import routes from 'modules/routes'
import Link from 'next/link'
import styles from './IndexPage.module.scss'
import type { PostPreview } from 'types/PostPreview'

export type IndexPageProps = {
  postPreviewList: PostPreview[]
}

function IndexPage({ postPreviewList }: IndexPageProps) {
  return (
    <Layout>
      <h1 className={styles.title}>
        <Link href={routes.home()}>{config.title}</Link>
      </h1>
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
