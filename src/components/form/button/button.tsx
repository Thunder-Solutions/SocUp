import Link, { LinkComponentProps } from '@/components/link/link';
import { getClassName, ButtonTagProps } from '@/utilities';
import css from './button.module.css';
import { PropsWithChildren } from 'react';

export type ButtonComponentProps = ButtonTagProps & {

  /**
   * Denotes how important this button is. The lower the number, the more important. (Same rules as h1, h2, etc.)
   */
  importance: number,
};

const Button = ({ children, className = '', type = 'submit', importance, ...props }: ButtonComponentProps) => {

  const buttonClass = getClassName({
    [css.primary]: importance === 1 || (type === 'submit' && typeof importance === 'undefined'),
  }, css.button, className);

  return (
    <button {...props} type={type} className={buttonClass}>{children}</button>
  );
};

type RawButtonLinkProps = {
  className?: string,
  wrapperClass?: string,
  type?: '' | 'primary',
};

export type ButtonLinkProps = PropsWithChildren<RawButtonLinkProps & Omit<LinkComponentProps, keyof RawButtonLinkProps>>;

const ButtonLink = ({ children, className = '', wrapperClass = '', type = '', ...props }: ButtonLinkProps) => {

  const buttonClass = getClassName({
    [css.primary]: type === 'primary',
  }, css.button, css.buttonLink, className);

  return (
    <Link {...props} type="none" className={buttonClass} wrapperClass={wrapperClass}>{children}</Link>
  );
};

Button.Link = ButtonLink;

export default Button;

