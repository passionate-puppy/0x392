import RoundedImage from 'components/base/RoundedImage'
import config from 'config'
import styles from './Author.module.scss'

function Author() {
  return (
    <div className={styles.container}>
      <RoundedImage
        alt=""
        src={config.avatar}
        width={48}
        height={48}
      />
      <div className={styles.description}>
        {config.description}
      </div>
    </div>
  )
}

export default Author
