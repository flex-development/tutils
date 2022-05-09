/**
 * @file Test Type Definitions - MochaSuiteSummary
 * @module tests/types/MochaSuiteSummary
 */

import type MochaTestSummary from './mocha-test-summary.type'

/**
 * Object representing a top level {@link Mocha.Suite} results summary.
 */
type MochaSuiteSummary = {
  __mocha_id__: string
  assertionResults: MochaTestSummary[]
  bail: boolean
  file: NonNullable<Mocha.Test['file']>
  isPending: ReturnType<Mocha.Suite['isPending']>
  title: Mocha.Suite['title']
}

export default MochaSuiteSummary
