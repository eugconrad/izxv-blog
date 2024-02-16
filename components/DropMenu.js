import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import {
  Bars3Icon,
  HomeIcon,
  TagIcon,
  ComputerDesktopIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  HeartIcon,
  NewspaperIcon,
  BookmarkSquareIcon,
  LinkIcon,
} from '@heroicons/react/20/solid'

import Link from '@/components/Link'

const links = [
  {
    href: '/',
    title: 'Главная',
    icon: <HomeIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    href: '/blog',
    title: 'Блог',
    icon: <NewspaperIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    href: '/tags',
    title: 'Теги',
    icon: <TagIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
]

const author_links = [
  {
    href: '/about',
    title: 'Об авторе',
    icon: <UserCircleIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    href: '/uses',
    title: 'Девайсы',
    icon: <ComputerDesktopIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    href: '/projects',
    title: 'Проекты',
    icon: <CodeBracketSquareIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    href: '/donate',
    title: 'Поддержать',
    icon: <HeartIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
]

const ext_links = [
  {
    href: 'https://x-net.pp.ua',
    title: 'X-Net',
    icon: <LinkIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
]

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const [OpenSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <Menu as="div" className="relative z-10 mt-1 inline-block text-left">
      <div>
        <Menu.Button className="py-1 px-2 text-gray-900 dark:text-gray-100 sm:py-2 sm:px-3">
          <motion.button
            className="flex h-8 w-8 items-center justify-center p-1"
            whileTap={{
              scale: 0.8,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1, ease: 'easeIn' }}
            aria-label="Toggle List Menu"
            type="button"
          >
            {isOpen ? <Bars3Icon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </motion.button>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          toggleIcon()
          OpenSound()
        }}
        afterLeave={() => {
          toggleIcon()
          OpenSound()
        }}
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-700 dark:bg-gray-800 ">
          <div className="py-1">
            {links.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <Menu.Item>
                {({ active }) => (
                  // eslint-disable-next-line @next/next/no-html-link-for-pages
                  <Link
                    href={link.href}
                    className={`${
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        : 'bg-white text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? link.icon : link.icon}
                    {link.title}
                  </Link>
                )}
              </Menu.Item>
            ))}

            <hr className={'m-2'} />

            {author_links.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <Menu.Item>
                {({ active }) => (
                  // eslint-disable-next-line @next/next/no-html-link-for-pages
                  <Link
                    href={link.href}
                    className={`${
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        : 'bg-white text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? link.icon : link.icon}
                    {link.title}
                  </Link>
                )}
              </Menu.Item>
            ))}

            <hr className={'m-2'} />

            {ext_links.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <Menu.Item>
                {({ active }) => (
                  // eslint-disable-next-line @next/next/no-html-link-for-pages
                  <Link
                    href={link.href}
                    className={`${
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        : 'bg-white text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? link.icon : link.icon}
                    {link.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
