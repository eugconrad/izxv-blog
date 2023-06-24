import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 mb-8 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="telegram" href={siteMetadata.telegram} />
          {/*<SocialIcon kind="vkontakte" href={siteMetadata.vkontakte} />*/}
          <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          {/*<SocialIcon kind="lolzteam" href={siteMetadata.lolzteam} />*/}
        </div>

        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="https://blog.izxv.fun"
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            {siteMetadata.author}
          </Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link
            href={siteMetadata.siteRepo}
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            Исходный код
          </Link>
        </div>
      </div>
    </footer>
  )
}
