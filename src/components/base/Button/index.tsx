import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Button.module.scss'

export type ButtonProps = {
  children?: ReactNode
  icon?: ReactNode
  iconPosition?: 'before' | 'after' | 'only'
}

function Button({
  children,
  icon,
  iconPosition = 'before',
}: ButtonProps) {
  const withText = !!children
  const withIcon = !!icon
  const iconOnly = !withText && withIcon

  return (
    <button
      className={classNames(
        styles.button,
        withText && styles.buttonWithText,
        withIcon && styles.buttonWithIcon,
        iconOnly && styles.buttonIconOnly,
        withText && withIcon && iconPosition === 'before' && styles.buttonIconPositionBefore,
        withText && withIcon && iconPosition === 'after' && styles.buttonIconPositionAfter
      )}
    >
      {withIcon && <div className={styles.icon}>{icon}</div>}
      {withText && <div className={styles.text}>{children}</div>}
    </button>
  )
}

export default Button
