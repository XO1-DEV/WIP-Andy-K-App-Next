import { cookies } from 'next/headers';

const locales = ['fr', 'en', 'es', 'de'] as const;
type Locale = typeof locales[number];

export async function getUserLocale(): Promise<Locale> {
  // Récupère la locale depuis les cookies ou utilise 'fr' par défaut
  const cookieStore = cookies();
  const locale = cookieStore.get('locale')?.value;
  
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  
  return 'fr'; // Langue par défaut
}

export function setUserLocale(locale: Locale) {
  const cookieStore = cookies();
  cookieStore.set('locale', locale);
}