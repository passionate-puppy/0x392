import Image from 'next/future/image'
import styles from './RoundedImage.module.scss'
import type { ImageProps } from 'next/future/image'

export type RoundedImageProps = {
  src: ImageProps['src']
  alt: ImageProps['alt']
  width: ImageProps['width']
  height: ImageProps['height']
}

function RoundedImage({ src, alt, width, height }: RoundedImageProps) {
  return (
    <div className={styles.container} style={{ width, height }}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  )
}

export default RoundedImage
