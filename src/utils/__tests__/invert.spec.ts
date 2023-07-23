/**
 * @file Unit Tests - invert
 * @module tutils/utils/tests/unit/invert
 */

import { CompareResult } from '#src/enums'
import testSubject from '../invert'

describe('unit:utils/invert', () => {
  it('should return inverted object', () => {
    // Arrange
    const obj: typeof CompareResult = {
      EQUAL: CompareResult.EQUAL,
      GREATER_THAN: CompareResult.GREATER_THAN,
      LESS_THAN: CompareResult.LESS_THAN
    }

    // Act + Expect
    expect(testSubject(obj)).to.eql({
      [CompareResult.EQUAL]: 'EQUAL',
      [CompareResult.GREATER_THAN]: 'GREATER_THAN',
      [CompareResult.LESS_THAN]: 'LESS_THAN'
    })
  })
})
