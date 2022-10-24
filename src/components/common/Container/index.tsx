import { ReactNode } from 'react'
import styles from './Container.module.scss'

export type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>
}

export default Container
