/**
 * @file Unit Tests - trimStart
 * @module tutils/utils/tests/unit/trimStart
 */

import testSubject from '../trim-start'

describe('unit:utils/trimStart', () => {
  it('should return string without leading whitespaces', () => {
    // Arrange
    const string: string = ' bar'

    // Act + Expect
    expect(testSubject(string)).to.equal(string.trimStart())
  })
})
