import { env } from '@/env';

export const sendMail = async <T>(request: T) => {
  if (env.DEBUG) console.log('[メール送信リクエスト]', request);

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify(request),
  });
  if (!response.ok) return { status: false, message: 'メール送信失敗' };

  return { status: true, message: 'メール送信成功' };
};
