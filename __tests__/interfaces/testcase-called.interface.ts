/**
 * @file Test Interfaces - TestcaseCalled
 * @module tests/interfaces/TestcaseCalled
 */

import type Testcase from './testcase.interface'

/**
 * Object representing a function call count test case.
 *
 * @see https://github.com/domenic/sinon-chai#assertions
 *
 * @extends {Testcase<number>}
 */
interface TestcaseCalled extends Testcase<number> {
  call: 'call' | 'not call'
}

export default TestcaseCalled
