// Completely disable Sentry instrumentation
// import * as Sentry from '@sentry/nextjs';

export async function register() {
  // Sentry disabled - no instrumentation
  console.log('Instrumentation disabled');
}

// Remove Sentry error capture
// export const onRequestError = Sentry.captureRequestError;
