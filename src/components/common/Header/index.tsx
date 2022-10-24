import siteMetaData from 'constants/siteMetaData'
import styles from './Header.module.scss'

export type HeaderProps = {
  theme: 'primary' | 'secondary'
}

function Header({ theme }: HeaderProps) {
  return (
    <div className={styles.container}>
      {theme === 'primary' && <h1>{siteMetaData.title}</h1>}
      {theme === 'secondary' && <h2>{siteMetaData.title}</h2>}
    </div>
  )
}

export default Header
