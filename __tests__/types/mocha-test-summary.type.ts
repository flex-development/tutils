/**
 * @file Test Type Definitions - MochaTestSummary
 * @module tests/types/MochaTestSummary
 */

/**
 * Object representing a {@link Mocha.Test} result summary.
 */
type MochaTestSummary = {
  __mocha_id__: string
  body: Mocha.Test['body']
  currentRetry: number
  duration: Mocha.Test['duration']
  err: Mocha.Test['err'] | null
  failureMessages: string[]
  file: NonNullable<Mocha.Test['file']>
  fullTitle: ReturnType<Mocha.Test['fullTitle']>
  isPending: ReturnType<Mocha.Test['isPending']>
  parent: { __mocha_id__: string; fullTitle: string } | undefined
  speed: Mocha.Test['speed']
  state: Mocha.Test['state']
  status: Exclude<Mocha.Test['state'], undefined> | 'pending'
  title: Mocha.Test['title']
  titlePath: ReturnType<Mocha.Test['titlePath']>
}

export default MochaTestSummary
