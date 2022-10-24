import Author from 'components/common/Author'
import Header from 'components/common/Header'
import Layout from 'components/common/Layout'

function IndexPage() {
  return (
    <Layout>
      <Header theme="primary" />
      <Author />
    </Layout>
  )
}

export default IndexPage
