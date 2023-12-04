import './theme.css';

export const metadata = {
	title: 'SocUp',
	description: 'Society has entered the chat.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" className="base">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
