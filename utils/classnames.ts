export function cln(...classnames: (string | boolean | undefined)[]) {
  return classnames.filter(Boolean).join(' ');
}
