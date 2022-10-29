import classNames from 'classnames'
import styles from './Button.module.scss'
import type { ReactNode } from 'react'

export type ButtonProps = {
  ariaLabel?: string
  children?: ReactNode
  href?: string
  icon?: ReactNode
  iconPosition?: 'before' | 'after' | 'only'
}

function Button({
  ariaLabel,
  children,
  href,
  icon,
  iconPosition = 'before',
}: ButtonProps) {
  const withText = !!children
  const withIcon = !!icon
  const iconOnly = !withText && withIcon

  const buttonContent = (
    <button
      aria-label={ariaLabel}
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

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}

export default Button
