import Link from '@/components/link/link';
import { LocaleContext } from '@/context/locale';
import { Fragment, useContext, useState } from 'react';
import css from './siteFooter.module.css';
// import Icon from '@/components/icon/icon';
import { GenericTagProps } from '@/utilities';
import Dialog from '../dialog/dialog';

export type SiteFooterProps = GenericTagProps;

const SiteFooter = ({ className = '', ...props }: SiteFooterProps) => {
  const locale = useContext(LocaleContext);
  const footerClass = `${css.footer} ${className}`;

  const photoCreditsDialogState = useState(false);
  const openPhotoCreditsDialog = () => {
    photoCreditsDialogState[1](true);
  }

  return (
    <footer {...props} className={footerClass}>
      <div className={css.links}>
        <div className={css.siteMap}>
          {locale.siteMap.map(({ text, href }, idx) => (
            <Fragment key={href}>
              <Link href={href} wrapperClass={css.siteMapLink}>{text}</Link>
              {idx === locale.siteMap.length - 1 ? <></> : <> | </>}
            </Fragment>
          ))}
        </div>
        {/* <div className={css.social}>
          {locale.social.map(({ type, title, href }) => (
            <Link key={href} className={css.socialLink} href={href}>
              <Icon type={type} title={title} />
            </Link>
          ))}
        </div> */}
      </div>
      <div className={css.other}>
        <small>{locale.copyright}</small>
        <button className={css.dialogLink} type="button" onClick={openPhotoCreditsDialog}>Photo Credits</button>
        <Dialog title="Photo Credits" openState={photoCreditsDialogState}>
          <ul className={css.list}>
            {locale.photoCredits.map(({ href, text }) => (
              <li key={href}>
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </Dialog>
      </div>
    </footer>
  );
};

export default SiteFooter;
