import { DEFAULT_SPLASH, SplashProvider } from '@/components/splash/splashContext';
import { Container, Head, InfoPanel, Markdown, Page, PageHeading, SplashBanner } from '@/components';

const content = {
	title: 'Business Participation',
	generalDesc: `- SocUp is a unique opportunity to connect with your local community and ensure steady profits.
- SocUp prioritizes partnerships that enhance employee's lives while also providing quality product or services to their communities.
- Job Board, rewards board, buying group, advertising, points boosts, and many more features for businesses.
- SocUp partners will have the ability to generate local quests for the players in their community while also having the opportunity to be the hero of local stories.
`,
};

const ForBusiness = () => {
	return (
		<SplashProvider
			value={{
				...DEFAULT_SPLASH,
				src: '/images/handshake.jpg',
			}}
		>
			<Head />
			<Page id="Home">
				<SplashBanner>
					<PageHeading title={content.title} />
				</SplashBanner>
				<Container>
					<InfoPanel>
						<Markdown>{content.generalDesc}</Markdown>
					</InfoPanel>
				</Container>
			</Page>
		</SplashProvider>
	);
};

export default ForBusiness;
