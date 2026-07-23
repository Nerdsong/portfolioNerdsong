export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en'];

export type Messages = typeof import('@/messages/es.json');

export async function getMessages(locale: Locale): Promise<Messages> {
  return (await import(`@/messages/${locale}.json`)).default;
}

export function getNestedValue(
  messages: Messages,
  key: string,
): string | undefined {
  const parts = key.split('.');
  let current: unknown = messages;

  for (const part of parts) {
    if (current === null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === 'string' ? current : undefined;
}
