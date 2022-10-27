import routes from 'modules/routes'
import Link from 'next/link'
import styles from './PostPreviewListItem.module.scss'
import type { PostPreview } from 'types/PostPreview'

export type PostPreviewListItemProps = {
  postPreview: PostPreview
}

function PostPreviewListItem({ postPreview }: PostPreviewListItemProps) {
  const {
    meta: { title },
    postPath,
  } = postPreview

  return (
    <div className={styles.container}>
      <Link href={routes.post(postPath)}>{title}</Link>
      <pre>{JSON.stringify(postPreview, null, 2)}</pre>
    </div>
  )
}

export default PostPreviewListItem
