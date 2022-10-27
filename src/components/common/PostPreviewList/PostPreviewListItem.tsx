import routes from 'modules/routes'
import Link from 'next/link'
import styles from './PostPreviewListItem.module.scss'
import type { PostPreview } from 'types/PostPreview'

export type PostPreviewListItemProps = {
  postPreview: PostPreview
}

function PostPreviewListItem({ postPreview }: PostPreviewListItemProps) {
  const {
    meta: {
      title,
      date,
      spoiler,
    },
    postPath,
  } = postPreview

  return (
    <div className={styles.container}>
      <h2>
        <Link href={routes.post(postPath)}>{title}</Link>
      </h2>
      <div>{date}</div>
      <div>{spoiler}</div>
    </div>
  )
}

export default PostPreviewListItem
