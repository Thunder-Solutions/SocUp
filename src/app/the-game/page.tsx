import { SplashProvider } from '@/components/splash/splashContext';
import { Container, Head, Heading, InfoPanel, Page, PageHeading, SplashBanner } from '@/components';

const content = {
	title: 'The Game Experience',
	howToPlayTitle: 'How to Play',
	howToPlayDesc:
		'The game experience and accompanying story is free for users, businesses, organizations, and communities with NFT purchases available as well. Users level up by going to businesses, parks, events, and completing quests. Users have an account, an interactive map, a marketplace for NFTs, and more.',
	dataTitle: 'Data',
	dataDesc:
		"SocUp Investment is backed by user data in the form of NFT collectibles. Users can keep their collectibles to maximize community impact, or they can sell them as a way to supplement their income. Users own the rights to their data this way. Users have the option to opt out of data collection as well but won't earn collectibles for their community; there is also an option to approve to whom data is sold. The collectibles can be converted into coin which can then be converted into government money, crypto, or other FinTech offerings. Cost to transfer will be industry cheapest.",
	upTeamsTitle: 'UpTeams',
	upTeamsDesc:
		'This is where the crowdsourcing magic happens. Through a variety of topics, users come together to collaborate and propose ideas that enhance the direction of their community and society. Users can belong to multiple UpTeams, and depending upon the nature of the ideas, can earn coin and collectibles for their contributions.',
};

const TheGame = () => {
	return (
		<SplashProvider value={{ src: '/images/people-having-fun.jpg' }}>
			<Head />
			<Page id="Home">
				<SplashBanner>
					<PageHeading title={content.title} />
				</SplashBanner>
				<Container>
					<InfoPanel>
						<Heading>{content.howToPlayTitle}</Heading>
						<p>{content.howToPlayDesc}</p>
					</InfoPanel>
					<InfoPanel>
						<Heading>{content.dataTitle}</Heading>
						<p>{content.dataDesc}</p>
					</InfoPanel>
					<InfoPanel>
						<Heading>{content.upTeamsTitle}</Heading>
						<p>{content.upTeamsDesc}</p>
					</InfoPanel>
				</Container>
			</Page>
		</SplashProvider>
	);
};

export default TheGame;
