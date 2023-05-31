import nodemailer from 'nodemailer';
import type { Handler, HandlerEvent } from '@netlify/functions';

const {
  MAILER_EMAIL,
  MAILER_CLIENT_ID,
  MAILER_PRIVATE_KEY,
} = process.env;

type EmailMessageText = {
  to: string,
  subject: string,
  text: string,
  html: string,
}

const DEFAULT_MESSAGE = {
  to: 'jon.dewitt@thunder.solutions',
  subject: 'Message from SocUp, Inc',
  text: 'This message was sent by our servers at https://socup.netlify.app.',
  html: /* html */`
    <p>
      This message was sent by our servers at
      <a href="https://socup.netlify.app">https://socup.netlify.app</a>.
    </p>
  `,
};

const sendEmail = async (_message: EmailMessageText = DEFAULT_MESSAGE) => {
  const message = {
    ...DEFAULT_MESSAGE,
    ..._message,
    text: _message.text || (_message.html || '').replace(/(<([^>]+)>)/gi, '') || DEFAULT_MESSAGE.text,
    html: _message.html || _message.text || DEFAULT_MESSAGE.html,
    from: `SocUp <${MAILER_EMAIL}>`,
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: MAILER_EMAIL,
      serviceClient: MAILER_CLIENT_ID,
      privateKey: MAILER_PRIVATE_KEY,
    },
  });
  try {
    await transporter.verify();
    return await transporter.sendMail(message);
  } catch (err) {
    return err;
  }
};

const handler: Handler = async (event: HandlerEvent) => {

  // handle missing body
  if (!event.body) return {
    statusCode: 422,
    body: JSON.stringify({
      error: true,
      message: 'Missing request body',
    }),
  };

  const { email } = JSON.parse(event.body);
  const response = await sendEmail({
    to: 'jon.dewitt@thunder.solutions',
    subject: `${email} Reserved a SocUp Account`,
    text: `${email} wants to reserve an account.`,
    html: /* html */`
      <p>
        <a href="mailto:${email}">${email}</a> wants to reserve an account.
      </p>
    `,
  });

  // handle bad response from nodemailer
  if (response instanceof Error) return {
    statusCode: 500,
    body: JSON.stringify({
      error: true,
      ...response,
    }),
  };

  // happy path
  return {
    statusCode: 200,
    body: JSON.stringify({
      emailResponse: response,
      message: 'Success',
    }),
  };
};

export { handler };
