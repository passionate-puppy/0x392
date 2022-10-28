import IndexPage from 'components/pages/IndexPage'
import { getAllPostData } from 'modules/server'
import type { GetStaticProps, NextPage } from 'next'
import type { PostPreview } from 'types/PostPreview'

export type IndexProps = {
  postPreviewList: PostPreview[]
}

const Index: NextPage<IndexProps> = ({ postPreviewList }) => {
  return <IndexPage postPreviewList={postPreviewList} />
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const allPostData = await getAllPostData()
  const postPreviewList = allPostData.map(({ meta, postPath }) => ({
    meta,
    postPath,
  }))

  return {
    props: {
      postPreviewList,
    },
  }
}

export default Index
