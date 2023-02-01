/**
 * @file Unit Tests - isObjectPlain
 * @module tutils/guards/tests/unit/isObjectPlain
 */

import Person from '#fixtures/person'
import testSubject from '../is-object-plain'

describe('unit:guards/isObjectPlain', () => {
  it('should return false if value is not plain object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [faker.datatype.array()],
      [new Person(faker.person.firstName(), faker.person.lastName())],
      [null]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is plain object', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [{ x: 0, y: 0 }],
      [Object.create(null)]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
