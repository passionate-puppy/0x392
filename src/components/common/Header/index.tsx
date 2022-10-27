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
        <h2>
          <Link href={routes.home()}>
            {config.title}
          </Link>
        </h2>
      )}
    </div>
  )
}

export default Header
