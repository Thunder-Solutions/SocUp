import { PropsWithChildren } from 'react';
import css from './infoPanel.module.css';

const InfoPanel = ({ children }: PropsWithChildren) => {
	return (
		<div className={css.infoPanel}>
			<div className={css.container}>{children}</div>
		</div>
	);
};

export default InfoPanel;
