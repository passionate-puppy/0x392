import styles from './PostHeader.module.scss'
import type { PostMeta } from 'types/PostMeta'

export type PostHeaderProps = {
  meta: PostMeta
}

function PostHeader({ meta }: PostHeaderProps) {
  const { title, date } = meta

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.date}>{date}</div>
    </div>
  )
}

export default PostHeader
