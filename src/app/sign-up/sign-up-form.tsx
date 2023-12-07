'use client';
import { Button, Form, Input } from '@/components';
import { emailRegex, htmlEmailRegex } from '@/utilities';
import { useState } from 'react';

const SignUpForm = ({ content }: { content: { [key: string]: string } }) => {
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
	);
};

export default SignUpForm;
