import { useEffect, useState } from 'react'

export function useIsMobileScreen({ enabled }: { enabled: boolean }) {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean | null>(null)

  useEffect(() => {
    if (!enabled) {
      return
    }

    let active = false

    const detectMobileScreen = () => {
      if (active) {
        return
      }

      active = true
      window.requestAnimationFrame(() => {
        setIsMobileScreen(window.matchMedia('(max-width: 575px)').matches)
        active = false
      })
    }

    window.addEventListener('resize', detectMobileScreen)

    return () => window.removeEventListener('resize', detectMobileScreen)
  }, [enabled])

  return [isMobileScreen]
}
