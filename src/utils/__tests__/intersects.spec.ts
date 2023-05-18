/**
 * @file Unit Tests - intersects
 * @module tutils/utils/tests/unit/intersects
 */

import FLOAT from '#fixtures/float'
import INTEGER from '#fixtures/integer'
import testSubject from '../intersects'

describe('unit:utils/intersects', () => {
  it('should return false if array1 and array2 do not intersect', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [[], []],
      [[{ value: faker.number.float() }], [{ value: faker.number.int() }]],
      [
        [FLOAT, faker.number.float()],
        [INTEGER, faker.number.int()]
      ],
      [
        [faker.date.future(), faker.date.future()],
        [faker.date.past(), faker.date.past()]
      ]
    ]

    // Act + Expect
    cases.forEach(([array1, array2]) => {
      expect(testSubject(array1, array2)).to.be.false
    })
  })

  it('should return true if array1 and array2 intersect', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [[INTEGER], [FLOAT, INTEGER]],
      [[[FLOAT]], [[FLOAT], [FLOAT, INTEGER]]],
      [[new Date()], [new Date(), new Date().toISOString()]],
      [[{ value: FLOAT }, { value: INTEGER }], [{ value: INTEGER }]]
    ]

    // Act + Expect
    cases.forEach(([array1, array2]) => {
      expect(testSubject(array1, array2)).to.be.true
    })
  })
})
