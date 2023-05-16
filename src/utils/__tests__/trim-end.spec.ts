/**
 * @file Unit Tests - trimEnd
 * @module tutils/utils/tests/unit/trimEnd
 */

import testSubject from '../trim-end'

describe('unit:utils/trimEnd', () => {
  it('should return string without trailing whitespaces', () => {
    // Arrange
    const string: string = 'foo '

    // Act + Expect
    expect(testSubject(string)).to.equal(string.trimEnd())
  })
})
