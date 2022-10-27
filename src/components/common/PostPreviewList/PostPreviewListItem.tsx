import styles from './PostPreviewListItem.module.scss'
import type { PostPreview } from 'types/PostPreview'

export type PostPreviewListItemProps = {
  postPreview: PostPreview
}

function PostPreviewListItem({ postPreview }: PostPreviewListItemProps) {
  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(postPreview, null, 2)}</pre>
    </div>
  )
}

export default PostPreviewListItem
