/**
 * @file Unit Tests - uppercase
 * @module tutils/utils/tests/unit/uppercase
 */

import testSubject from '../uppercase'

describe('unit:utils/uppercase', () => {
  it('should return uppercase string', () => {
    // Arrange
    const string: string = faker.person.firstName().toLowerCase()

    // Act + Expect
    expect(testSubject(string)).to.equal(string.toLocaleUpperCase())
  })
})
