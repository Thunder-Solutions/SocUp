import Image from 'next/image'
import css from './siteTitle.module.css'

const SiteTitle = () => {
  return (
    <Image src="/logos/socup-logo.svg" alt="SocUp" width={688} height={289} className={css.siteTitle} />
  )
}

export default SiteTitle
