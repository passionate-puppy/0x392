import Button from 'components/base/Button'
import styles from './SocialLinks.module.scss'

function SocialLinks() {
  return (
    <div className={styles.container}>
      <Button icon={<i className="fab fa-github" />} />
      <Button icon={<i className="fab fa-linkedin" />} />
    </div>
  )
}

export default SocialLinks
