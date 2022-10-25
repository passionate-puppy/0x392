import Avatar from 'components/base/Avatar'
import config from 'config'
import styles from './Author.module.scss'

function Author() {
  return (
    <div className={styles.container}>
      <Avatar
        alt=""
        size="medium"
        src={config.avatar}
      />
      <div className={styles.description}>
        {config.description}
      </div>
    </div>
  )
}

export default Author
