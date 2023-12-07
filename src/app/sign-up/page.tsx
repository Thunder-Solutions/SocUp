import { DEFAULT_SPLASH, SplashProvider } from '@/components/splash/splashContext';
import { Container, Head, Heading, InfoPanel, Page, PageHeading, SplashBanner } from '@/components';
import SignUpForm from './sign-up-form';

const content = {
	title: 'Sign Up',
	reserveTitle: 'Reserve Your Account',
	reserveDesc: `Reserve a spot now to enjoy exclusive early-adopter benefits and get
notified when the app is launched!`,
	emailLabel: 'Email',
	submitLabel: 'Reserve My Account',
	emailError: "Hmm, that email doesn't look right.",
	emailSubmitted: 'Thank you for reserving your account!',
	submitAnother: 'Submit Another',
	generalError: 'Something went wrong on our servers, please try again later.',
};

const TheGame = () => {
	return (
		<SplashProvider
			value={{
				...DEFAULT_SPLASH,
				src: '/images/future-tech.jpg',
			}}
		>
			<Head />
			<Page id="Home">
				<SplashBanner>
					<PageHeading title={content.title} />
				</SplashBanner>
				<Container>
					<InfoPanel>
						<Heading>{content.reserveTitle}</Heading>
						<p>{content.reserveDesc}</p>
						<SignUpForm content={content} />
					</InfoPanel>
				</Container>
			</Page>
		</SplashProvider>
	);
};

export default TheGame;
