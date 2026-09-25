/** Prefix a public asset for the current deployment target. */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${basePath}${path}`;
}
