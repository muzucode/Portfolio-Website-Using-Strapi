// skewer converts a string to all lower-cased, with dashes for spaces
export function skewer(str: string) {
  return str.replaceAll(' ', '-').toLowerCase();
}