declare global {
  type PackageJson =
    & Omit<typeof import('../../package.json'), 'optionalDependencies'>
    & {
      optionalDependencies?: Record<string, string>
      peerDependencies?: Record<string, string>
    }
}

export {}
