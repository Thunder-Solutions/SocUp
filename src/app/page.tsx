'use client';

import { DEFAULT_SPLASH, SplashContext, SplashImage } from '@/components/splash/splashContext';
import { Container, Head, Heading, InfoPanel, Markdown, Page, SiteTitle, Splash } from '@/components';

const content = {
	title: '> Society has entered the chat.',
	aboutTitle: 'About',
	aboutDesc: `SocUp is a real life interactive game that does economic repair and community development. It was first conceptualized in 2021 and a lot of work has been poured into it. SocUp seeks to work in tandem with Monopoly, which we all currently play, by introducing gaming and NFTs to society. SocUp is both an individual and a community game. Players level up, earn items, and interact with the real world while also working within their community to reach certain objectives.

SocUp is around an 8-year game, advancing through historical eras with modern anachronisms, and the prologue captures the first era. The Prologue starts 10/1 and simulates the start of the dawn of humanity. From there, players will begin the organize into their communities. The prologue allows players to earn points, badges, resources, and items that will help them when the game officially launches in Spring 2024.`,
	rulesTitle: 'Prologue Rules',
	rulesDesc: `- Every participant in the Facebook game gets a pioneer badge that will hold special credit when the community game begins.
- Each comment, like, and share is worth credit in the game, at varying degrees. Shares are worth more for example than likes.
- Inviting others to join is how a player levels up their pioneer badge. The more they invite that join, the higher their pioneer level is.
- TikTok is a way to gather resources by stitching or dueting SocUp posts
- All resources, points, items, etc will be converted to the SocUp app by linking your other social media profiles.
- [Visit the game site.](https://www.facebook.com/groups/1006378860630624)`,
};

const Home = () => {
	const splash: SplashImage = {
		...DEFAULT_SPLASH,
		src: '/images/future-tech.jpg',
	};
	return (
		<SplashContext.Provider value={splash}>
			<Head />
			<Page id="Home">
				<Splash>
					<SiteTitle />
					<InfoPanel>
						<Heading>{content.title}</Heading>
					</InfoPanel>
				</Splash>
				<Container>
					<InfoPanel>
						<Heading>{content.aboutTitle}</Heading>
						<p>{content.aboutDesc}</p>
					</InfoPanel>
					<InfoPanel>
						<Heading>{content.rulesTitle}</Heading>
						<Markdown>{content.rulesDesc}</Markdown>
					</InfoPanel>
				</Container>
			</Page>
		</SplashContext.Provider>
	);
};

export default Home;
