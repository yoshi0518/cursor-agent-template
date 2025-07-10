import { z } from 'zod';

const envSchema = z.object({
  DEBUG: z.string().transform((value) => value === 'true'),
  NEON_DATABASE_URL: z.string(),
  NEON_SCHEMA_PROD: z.string(),
  NEON_SCHEMA_DEV: z.string(),
  SENDGRID_API_KEY: z.string(),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string(),
  RECAPTCHA_SECRET_KEY: z.string(),
});

const parsedEnv = envSchema.safeParse({
  DEBUG: process.env.DEBUG,
  NEON_DATABASE_URL: process.env.NEON_DATABASE_URL,
  NEON_SCHEMA_PROD: process.env.NEON_SCHEMA_PROD,
  NEON_SCHEMA_DEV: process.env.NEON_SCHEMA_DEV,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
});

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}

export const env = parsedEnv.data;
