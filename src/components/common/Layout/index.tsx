import Container from 'components/common/Container'
import styles from './Layout.module.scss'
import type { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Container>{children}</Container>
    </div>
  )
}

export default Layout
