/// <reference types='vitest/globals' />

interface ImportMetaEnv extends Readonly<import('vite').ImportMetaEnv> {
  readonly BASE_URL: string
  readonly CI: 'false' | 'true'
  readonly DEV: '1' | import('@flex-development/tutils').EmptyString
  readonly MODE: import('@flex-development/tutils').NodeEnv.TEST
  readonly NODE_ENV: import('@flex-development/tutils').NodeEnv.TEST
  readonly PROD: '1' | import('@flex-development/tutils').EmptyString
  readonly SSR: '1' | import('@flex-development/tutils').EmptyString
  readonly TEST: 'true'
  readonly VITEST: 'true'
  readonly VITEST_CLI_WRAPPER: 'false' | 'true'
  readonly VITE_USER_NODE_ENV: import('@flex-development/tutils').NodeEnv.TEST
  readonly VITEST_SEGFAULT_RETRY: import('@flex-development/tutils').Numeric
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
