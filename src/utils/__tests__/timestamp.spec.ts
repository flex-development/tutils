/**
 * @file Unit Tests - timestamp
 * @module tutils/utils/tests/unit/timestamp
 */

import testSubject from '../timestamp'

describe('unit:utils/timestamp', () => {
  it('should return date as ISO 8601 timestamp', () => {
    // Arrange
    const cases: [Parameters<typeof testSubject>[0]][] = [
      [null],
      [undefined],
      [faker.date.anytime()],
      [faker.date.future().getTime()],
      [faker.date.past().toISOString()]
    ]

    // Act + Expect
    cases.forEach(([date]) => {
      expect(testSubject(date, 'iso')).to.be.a('string')
    })
  })

  it('should return date as unix timestamp', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [null, null],
      [undefined, undefined],
      [faker.date.anytime(), 'unix'],
      [faker.date.future().getTime()],
      [faker.date.past().toISOString()]
    ]

    // Act + Expect
    cases.forEach(([date, format]) => {
      expect(testSubject(date, format)).to.be.a('number')
    })
  })
})
