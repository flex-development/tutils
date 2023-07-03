/**
 * @file Type Tests - NegativeNumeric
 * @module tutils/types/tests/unit-d/NegativeNumeric
 */

import type Numeric from '../numeric'
import type TestSubject from '../numeric-negative'

describe('unit-d:types/NegativeNumeric', () => {
  it('should equal `-${Numeric}`', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<`-${Numeric}`>()
  })
})
