import classNames from 'classnames'
import Image from 'next/future/image'
import styles from './Avatar.module.scss'
import type { ImageProps } from 'next/future/image'

const sizeOptions = {
  xSmall: 16,
  small: 32,
  medium: 40,
  large: 96,
  xLarge: 128,
}

export type AvatarProps = {
  alt: ImageProps['alt']
  size: keyof typeof sizeOptions
  src: ImageProps['src']
}

function Avatar({ alt, size, src }: AvatarProps) {
  const width = sizeOptions[size]
  const height = sizeOptions[size]

  return (
    <div className={classNames(styles.avatar, sizeOptions[size])}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  )
}

export default Avatar
