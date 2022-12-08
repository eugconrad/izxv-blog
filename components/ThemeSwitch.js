import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  const [ThemeSound] = useSound('/static/sounds/switch-on.mp3')

  const ThemeSwitch = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="mt-1 py-1 px-2 text-gray-900 dark:text-gray-100 sm:py-2 sm:px-3">
      <motion.button
        className="flex h-8 w-8 items-center justify-center p-1"
        whileTap={{
          scale: 0.8,
          rotate: 360,
        }}
        whileHover={mounted ? { scale: 1.1 } : {}}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => {
          ThemeSwitch()
          ThemeSound()
        }}
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <SunIcon className="h-6 w-6 hover:animate-spin" />
        ) : (
          <MoonIcon className="h-6 w-6 hover:animate-spin" />
        )}
      </motion.button>
    </div>
  )
}

export default ThemeSwitch
