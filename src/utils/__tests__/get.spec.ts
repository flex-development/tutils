/**
 * @file Unit Tests - get
 * @module tutils/utils/tests/unit/get
 */

import type Person from '#fixtures/interfaces/person'
import type { EmptyString } from '#src/types'
import testSubject from '../get'

describe('unit:utils/get', () => {
  let person: Person

  beforeAll(() => {
    person = {
      age: faker.number.int({ max: 25, min: 18 }),
      friends: [
        {
          age: faker.number.int({ max: 25, min: 18 }),
          name: {
            first: faker.person.firstName(),
            last: faker.person.lastName()
          }
        }
      ],
      name: {
        first: faker.person.firstName(),
        last: faker.person.lastName(),
        middle: faker.person.middleName()
      }
    }
  })

  it('should return fallback if indexed value is undefined', () => {
    // Arrange
    const fallback: EmptyString = ''

    // Act
    const result = testSubject(person, 'friends.0.name.middle', fallback)

    // Expect
    expect(result).to.deep.equal(fallback)
  })

  it('should return dynamically indexed value', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, unknown][] = [
      ['person', 0, undefined, 'p'],
      [null, 'age', undefined, null],
      [person, 'age', undefined, person.age],
      [person, 'age.', undefined, person.age],
      [person, 'friends', undefined, person.friends],
      [person, 'friends.0.name.last', undefined, person.friends![0]!.name.last],
      [person, 'name.first', undefined, person.name.first],
      [person, 'name.first.-1', undefined, person.name.first.at(-1)]
    ]

    // Act + Expect
    cases.forEach(([value, path, fallback, expected]) => {
      expect(testSubject(value, path, fallback)).to.deep.equal(expected)
    })
  })
})
