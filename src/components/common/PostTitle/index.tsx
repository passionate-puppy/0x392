import styles from './PostTitle.module.scss'
import type { ReactNode } from 'react'

export type PostTitleProps = {
  children: ReactNode
}

function PostTitle({ children }: PostTitleProps) {
  return <h1 className={styles.title}>{children}</h1>
}

export default PostTitle
