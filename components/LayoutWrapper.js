import { useState, useEffect, useRef } from 'react'

import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import { useRouter } from 'next/router'
import Typewriter from 'typewriter-effect'
import DropDown from '@/components/DropMenu'

const LayoutWrapper = ({ children }) => {
  const [stuck, setStuck] = useState(false)
  const ref = useRef()

  const stuckClasses =
    'py-2 md:py-4 sticky top-n-1 z-50 transition-all backdrop isSticky mx-auto border-b border-slate-900/10 dark:border-slate-300/10 mb-16 w-full'
  const unstuckClasses =
    'py-2 md:py-8 sticky top-n-1 z-50 transition-all backdrop mx-auto border-b border-b-0 border-slate-900/10 dark:border-slate-300/10 mb-16 w-full'

  const classes = stuck ? stuckClasses : unstuckClasses

  useEffect(() => {
    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setStuck(e.intersectionRatio < 1)
      },
      { threshold: [1.0] }
    )
    observer.observe(cachedRef)
    return () => observer.unobserve(cachedRef)
  }, [ref])

  const router = useRouter()
  let path = router.asPath.split('/')
  if (path.length > 1) {
    let last_element = path.pop()
    path.forEach(function (item, index) {
      path[index] = path[index].substr(0, 1)
    })
    path.push(last_element)
  }
  path = path.join('/')

  return (
    <>
      <header className={classes} ref={ref}>
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div>
            <Link href="/" aria-label="rooks blog">
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                {`~${path} ❯ `}{' '}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <DropDown />
          </div>
        </div>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
