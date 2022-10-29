import Container from 'components/common/Container'
import Head from 'next/head'
import styles from './Layout.module.scss'
import type { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
  description: string
  title: string
}

function Layout({ children, description, title }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Container>{children}</Container>
    </div>
  )
}

export default Layout
