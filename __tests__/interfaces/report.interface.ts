/**
 * @file Test Environment Interfaces - Report
 * @module tests/interfaces/Report
 */

import type { MochaSuiteSummary, MochaTestSummary } from '../types'

/**
 * Custom test reporter output.
 */
interface Report {
  readonly results: MochaSuiteSummary[]
  readonly stats: Mocha.Stats
  readonly suites: Required<
    Pick<Mocha.Suite, 'root' | 'title'> & {
      _bail: boolean
      parent: NonNullable<MochaTestSummary['parent']>['__mocha_id__']
    }
  >[]
}

export default Report
