const NORMALIZE_RE = /\s{2,}(?![^<>]*<\/(pre|code|textarea)>)/g;

export default function normalizeSpaces(text) {
  return text;
  // eslint-disable-next-line no-unreachable
  return text.replace(NORMALIZE_RE, ' ');
}
