import config from 'config'
import routes from 'modules/routes'
import Link from 'next/link'
import styles from './Header.module.scss'

export type HeaderProps = {
  theme: 'primary' | 'secondary'
}

function Header({ theme }: HeaderProps) {
  return (
    <div className={styles.container}>
      {theme === 'primary' && <h1>{config.title}</h1>}
      {theme === 'secondary' && (
        <Link href={routes.home()}>
          <h2>{config.title}</h2>
        </Link>
      )}
    </div>
  )
}

export default Header
