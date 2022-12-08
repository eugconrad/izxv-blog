import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Telegram from './telegram.svg'
import Vkontakte from './vkontakte.svg'
import Instagram from './instagram.svg'
import Lolzteam from './lolzteam.svg'
import { FiExternalLink } from 'react-icons/fi'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  telegram: Telegram,
  vkontakte: Vkontakte,
  instagram: Instagram,
  lolzteam: Lolzteam,
  external: FiExternalLink,
}

const SocialIcon = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        style={{ height: '1.5rem', width: '1.5rem' }}
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400`}
      />
    </a>
  )
}

export default SocialIcon
