import routes from 'modules/routes'
import Link from 'next/link'
import styles from './SiblingPosts.module.scss'
import type { Post } from 'types/Post'

export type SiblingPostsProps = {
  siblingPosts: {
    nextPost: Post | null
    prevPost: Post | null
  }
}

function SiblingPosts({ siblingPosts }: SiblingPostsProps) {
  const { nextPost, prevPost } = siblingPosts

  if (!nextPost && !prevPost) {
    return null
  }

  return (
    <div className={styles.container}>
      {prevPost && (
        <Link href={routes.post(prevPost.postPath)}>
          <a className={styles.prevLink}>← {prevPost.meta.title}</a>
        </Link>
      )}
      {nextPost && (
        <Link href={routes.post(nextPost.postPath)}>
          <a className={styles.nextLink}>{nextPost.meta.title} →</a>
        </Link>
      )}
    </div>
  )
}

export default SiblingPosts
