import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Button.module.scss'

export type ButtonProps = {
  children?: ReactNode
  icon?: ReactNode
  iconOnly?: boolean
  iconPosition?: 'before' | 'after' | 'only'
}

function Button({
  children,
  icon,
  iconOnly = false,
  iconPosition = 'before',
}: ButtonProps) {
  const withIcon = !!icon && (iconOnly || !!iconPosition)

  return (
    <button
      className={classNames(
        styles.button,
        withIcon && iconOnly && styles.buttonIconOnly,
        withIcon && iconPosition === 'before' && styles.buttonIconPositionBefore,
        withIcon && iconPosition === 'after' && styles.buttonIconPositionAfter
      )}
    >
      {withIcon && <div className={styles.icon}>{icon}</div>}
      {!iconOnly && <div className={styles.text}>{children}</div>}
    </button>
  )
}

export default Button
