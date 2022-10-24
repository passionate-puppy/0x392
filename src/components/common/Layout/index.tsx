import Container from 'components/common/Container'
import { ReactNode } from 'react'
import styles from './Layout.module.scss'

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
