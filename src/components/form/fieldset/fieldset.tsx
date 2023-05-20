import { FieldsetTagProps } from '@/utilities';
import css from './fieldset.module.css';

export type FieldsetComponentProps = FieldsetTagProps & {
  legend?: string,
};

const Fieldset = ({ children, className = '', legend = 'Section', ...props }: FieldsetComponentProps) => {

  const fieldsetClass = `${className} ${css.fieldset}`;

  return (
    <fieldset {...props} className={fieldsetClass}>
      <legend className={css.legend}>{legend}</legend>
      <div className={css.content}>
        {children}
      </div>
    </fieldset>
  );
};

export default Fieldset;
