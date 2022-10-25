import Author from 'components/common/Author'
import Header from 'components/common/Header'
import Layout from 'components/common/Layout'
import SocialLinks from 'components/common/SocialLinks'

function IndexPage() {
  return (
    <Layout>
      <Header theme="primary" />
      <Author />
      <SocialLinks />
    </Layout>
  )
}

export default IndexPage
