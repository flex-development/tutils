/**
 * @file Unit Tests - constant
 * @module tutils/utils/tests/unit/constant
 */

import type { Booleanish } from '#src/types'
import testSubject from '../constant'

describe('unit:utils/constant', () => {
  it('should return constant function', () => {
    // Arrange
    const value: Booleanish = 1

    // Act
    const result = testSubject(value)

    // Expect
    expect(result).to.be.a('function')
    expect(result()).to.equal(value)
  })
})
