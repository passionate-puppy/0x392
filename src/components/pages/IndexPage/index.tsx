import Author from 'components/common/Author'
import Header from 'components/common/Header'
import Layout from 'components/common/Layout'
import PostPreviewList from 'components/common/PostPreviewList'
import SocialLinks from 'components/common/SocialLinks'
import type { PostPreview } from 'types/PostPreview'

export type IndexPageProps = {
  postPreviewList: PostPreview[]
}

function IndexPage({ postPreviewList }: IndexPageProps) {
  return (
    <Layout>
      <Header theme="primary" />
      <Author />
      <PostPreviewList postPreviewList={postPreviewList} />
      <SocialLinks />
    </Layout>
  )
}

export default IndexPage
