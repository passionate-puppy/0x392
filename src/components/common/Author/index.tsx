import RoundedImage from 'components/base/RoundedImage'
import siteMetaData from 'constants/siteMetaData'
import styles from './Author.module.scss'

function Author() {
  return (
    <div className={styles.container}>
      <RoundedImage
        alt=""
        src={siteMetaData.avatar}
        width={48}
        height={48}
      />
      <div className={styles.description}>
        {siteMetaData.description}
      </div>
    </div>
  )
}

export default Author
