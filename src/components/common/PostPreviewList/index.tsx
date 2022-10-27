import styles from './PostPreviewList.module.scss'
import type { PostPreview } from 'types/PostPreview'
import PostPreviewListItem from './PostPreviewListItem'

export type PostPreviewListProps = {
  postPreviewList: PostPreview[]
}

function PostPreviewList({ postPreviewList }: PostPreviewListProps) {
  if (postPreviewList.length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      {postPreviewList.map((postPreview) => {
        return (
          <PostPreviewListItem
            key={postPreview.path}
            postPreview={postPreview}
          />
        )
      })}
    </div>
  )
}

export default PostPreviewList
