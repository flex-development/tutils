/**
 * @file Unit Tests - isNIL
 * @module tutils/guards/tests/unit/isNIL
 */

import testSubject from '../is-nil'

describe('unit:guards/isNIL', () => {
  it('should return false if value is not NIL', () => {
    expect(testSubject(faker.git.commitSha())).to.be.false
  })

  it('should return true if value is NIL', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [[null], [undefined]]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
