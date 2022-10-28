import classNames from 'classnames'
import config from 'config'
import routes from 'modules/routes'
import Link from 'next/link'
import styles from './SiteHeader.module.scss'

const themeOptions = {
  primary: styles.siteHeaderPrimary,
  secondary: styles.siteHeaderSecondary,
}

export type SiteHeaderProps = {
  theme: keyof typeof themeOptions
}

function SiteHeader({ theme }: SiteHeaderProps) {
  return (
    <div className={classNames(styles.siteHeader, themeOptions[theme])}>
      <Link href={routes.home()}>{config.title}</Link>
    </div>
  )
}

export default SiteHeader
