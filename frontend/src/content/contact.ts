/**
 * Email de contacto. Override con NEXT_PUBLIC_CONTACT_EMAIL en .env para que
 * todos los enlaces "Contactar" (mailto) envíen a tu bandeja.
 */
export const CONTACT_EMAIL =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_CONTACT_EMAIL) ||
  "hola@localia.es";
