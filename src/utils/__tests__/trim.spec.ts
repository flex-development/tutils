/**
 * @file Unit Tests - trim
 * @module tutils/utils/tests/unit/trim
 */

import testSubject from '../trim'

describe('unit:utils/trim', () => {
  it('should return string without leading and trailing whitespaces', () => {
    // Arrange
    const string: string = ' baz '

    // Act + Expect
    expect(testSubject(string)).to.equal(string.trim())
  })
})
