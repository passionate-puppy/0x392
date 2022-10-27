import IndexPage from 'components/pages/IndexPage'
import { getPostPreviewList } from 'modules/server'
import type { GetStaticProps, NextPage } from 'next'
import type { PostPreview } from 'types/PostPreview'

export type IndexProps = {
  postPreviewList: PostPreview[]
}

const Index: NextPage<IndexProps> = ({ postPreviewList }) => {
  return <IndexPage postPreviewList={postPreviewList} />
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const postPreviewList = await getPostPreviewList()

  postPreviewList.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))

  return {
    props: {
      postPreviewList,
    },
  }
}

export default Index
