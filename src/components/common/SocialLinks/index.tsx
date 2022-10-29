import Button from 'components/base/Button'
import config from 'config'
import styles from './SocialLinks.module.scss'

function SocialLinks() {
  const { socialLinks } = config
  return (
    <div className={styles.container}>
      {socialLinks.GitHub && (
        <Button
          ariaLabel="Link to Github page"
          href={socialLinks.GitHub}
          icon={<i className="fab fa-github" />}
        />
      )}
      {socialLinks.LinkedIn && (
        <Button
          ariaLabel="Link to LinkedIn page"
          href={socialLinks.LinkedIn}
          icon={<i className="fab fa-linkedin" />}
        />
      )}
    </div>
  )
}

export default SocialLinks
