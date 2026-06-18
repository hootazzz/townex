/**
 * Single source of truth for all TOWNX contact information.
 * Anywhere in the app that links to phone / WhatsApp / TikTok should import from here.
 */

export const TEL = '+966501000460';
export const TEL_DISPLAY = '+966 50 100 0460';
export const TEL_HREF = `tel:${TEL}`;

export const WHATSAPP_NUMBER = '966501000460';
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
export function whatsappWithMessage(message: string): string {
  return `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`;
}

export const TIKTOK_HANDLE = '@vt.d2030_0';
export const TIKTOK_HREF = 'https://www.tiktok.com/@vt.d2030_0';

export const EMAIL = 'info@townx.sa';
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const ADDRESS = 'الرياض، المملكة العربية السعودية';
