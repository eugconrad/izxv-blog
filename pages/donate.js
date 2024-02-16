import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import usesData from '@/data/usesData'
import Image from '@/components/Image'

export default function Donate() {
  return (
    <>
      <PageSEO title={`~/donate.html`} description="Донат" />
      <div className="mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Поддержать автора
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Приветствую вас на странице поддержки моего блога!
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-row flex-wrap">
            <p>
              Меня зовут [Ваше имя] и я создаю контент с целью делиться своими знаниями, опытом и
              вдохновением с вами. Если вам нравится то, что я делаю, и вы хотите помочь мне
              продолжать этот творческий путь, здесь вы найдете различные способы сделать это
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
