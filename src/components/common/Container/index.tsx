import styles from './Container.module.scss'
import type { ReactNode } from 'react'

export type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>
}

export default Container
