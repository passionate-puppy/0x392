import config from 'config'
import routes from 'modules/routes'
import Link from 'next/link'
import styles from './Header.module.scss'
import type { ReactNode } from 'react'

export type HeaderProps = {
  theme: 'primary' | 'secondary'
}

function Header({ theme }: HeaderProps) {
  return (
    <div className={styles.container}>
      <HeaderWrapper theme={theme}>
        <Link href={routes.home()}>
          {config.title}
        </Link>
      </HeaderWrapper>
    </div>
  )
}

export type HeaderWrapperProps = {
  children: ReactNode
  theme: HeaderProps['theme']
}

function HeaderWrapper({ children, theme }: HeaderWrapperProps) {
  if (theme === 'primary') {
    return <h1>{children}</h1>
  }

  if (theme === 'secondary') {
    return <h2>{children}</h2>
  }

  return null
}

export default Header
