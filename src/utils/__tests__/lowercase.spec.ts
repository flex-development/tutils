/**
 * @file Unit Tests - lowercase
 * @module tutils/utils/tests/unit/lowercase
 */

import testSubject from '../lowercase'

describe('unit:utils/lowercase', () => {
  it('should return lowercase string', () => {
    // Arrange
    const string: string = faker.internet.email().toLowerCase()

    // Act + Expect
    expect(testSubject(string)).to.equal(string.toLocaleLowerCase())
  })
})
