import Button from 'components/base/Button'
import styles from './SocialLinks.module.scss'

function SocialLinks() {
  return (
    <div className={styles.container}>
      <Button
        icon={<i className="fab fa-github" />}
        iconOnly
      />
      <Button
        icon={<i className="fab fa-linkedin" />}
        iconOnly
      />
    </div>
  )
}

export default SocialLinks
