/**
 * @file Type Tests - NaN
 * @module tutils/types/tests/unit-d/NaN
 */

import type TestSubject from '../nan'
import type Opaque from '../opaque'

describe('unit-d:types/NaN', () => {
  it('should equal Opaque<number, "NaN">', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Opaque<number, 'NaN'>>()
  })
})
