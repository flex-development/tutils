/**
 * @file Type Tests - segment
 * @module tutils/utils/tests/unit-d/segment
 */

import type { Segment } from '#src/types'
import type testSubject from '../segment'

describe('unit-d:utils/segment', () => {
  it('should return Segment<T>', () => {
    // Arrange
    type T = 'hello.world'

    // Expect
    expectTypeOf<typeof testSubject<T>>().returns.toEqualTypeOf<Segment<T>>()
  })
})
