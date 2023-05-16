/**
 * @file Unit Tests - isObject
 * @module tutils/utils/tests/unit/isObject
 */

import testSubject from '../is-object'

describe('unit:utils/isObject', () => {
  it('should return false if value is not non-null object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [[null], [vi.fn()]]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is non-null object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [[]],
      [faker.date.anytime()],
      [{ job_title: faker.person.jobTitle() }]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
