import classNames from 'classnames'
import Image from 'next/future/image'
import styles from './Avatar.module.scss'
import type { ImageProps } from 'next/future/image'

const sizeOptions = {
  xSmall: styles.avatarXSmall,
  small: styles.avatarSmall,
  medium: styles.avatarMedium,
  large: styles.avatarLarge,
  xLarge: styles.avatarXLarge,
}

export type AvatarProps = {
  alt: ImageProps['alt']
  size: keyof typeof sizeOptions
  src: ImageProps['src']
}

function Avatar({ alt, size, src }: AvatarProps) {
  return (
    <div className={classNames(styles.avatar, sizeOptions[size])}>
      <Image
        alt={alt}
        fill
        src={src}
      />
    </div>
  )
}

export default Avatar
