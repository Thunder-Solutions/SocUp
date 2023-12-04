'use client';

import { DEFAULT_SPLASH, SplashImage, SplashProvider } from '@/components/splash/splashContext';
import { emailRegex, htmlEmailRegex } from '@/utilities';
import {
	Button,
	Container,
	Form,
	Head,
	Heading,
	InfoPanel,
	Input,
	Page,
	PageHeading,
	SplashBanner,
} from '@/components';
import { useState } from 'react';

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
	const splash: SplashImage = {
		...DEFAULT_SPLASH,
		src: '/images/future-tech.jpg',
	};

	const [showForm, setShowForm] = useState(true);
	const [refresh, setRefresh] = useState(false);

	const handleSubmit = async (formData: FormData) => {
		const email = formData.get('email');
		if (typeof email !== 'string') throw new Error(content.emailError);
		const valid = emailRegex.test(email);
		if (!valid) throw new Error(content.emailError);
		setShowForm(false);
		const response = await fetch('/.netlify/functions/reserveAccount', {
			method: 'POST',
			body: JSON.stringify({ email }),
		}).then((r) => r.json());
		if (response.error) {
			console.error(response.error);
			throw new Error(content.generalError);
		}
		console.debug('Response:', response);
		return content.emailSubmitted;
	};

	const submitAnother = () => {
		setRefresh(!refresh);
		setShowForm(true);
	};

	return (
		<SplashProvider value={splash}>
			<Head />
			<Page id="Home">
				<SplashBanner>
					<PageHeading title={content.title} />
				</SplashBanner>
				<Container>
					<InfoPanel>
						<Heading>{content.reserveTitle}</Heading>
						<p>{content.reserveDesc}</p>
						<Form onSubmit={handleSubmit} key={refresh}>
							{showForm ? (
								<>
									<Input label={content.emailLabel} name="email" required pattern={htmlEmailRegex} />
									<Button>{content.submitLabel}</Button>
								</>
							) : (
								<Button type="button" importance={1} onClick={submitAnother}>
									{content.submitAnother}
								</Button>
							)}
						</Form>
					</InfoPanel>
				</Container>
			</Page>
		</SplashProvider>
	);
};

export default TheGame;
