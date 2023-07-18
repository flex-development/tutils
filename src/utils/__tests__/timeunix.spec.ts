/**
 * @file Unit Tests - timeunix
 * @module tutils/utils/tests/unit/timeunix
 */

import testSubject from '../timeunix'

describe('unit:utils/timeunix', () => {
  it('should return date as unix timestamp', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [null],
      [undefined],
      [faker.date.anytime()],
      [faker.date.future().getTime()],
      [faker.date.past().toISOString()]
    ]

    // Act + Expect
    cases.forEach(([date]) => expect(testSubject(date)).to.be.a('number'))
  })

  it('should throw if timestamp is invalid', () => {
    // Arrange
    const date: number = Number.MAX_SAFE_INTEGER
    let error!: RangeError

    // Act
    try {
      testSubject(date)
    } catch (e: unknown) {
      error = e as typeof error
    }

    // Expect
    expect(error).to.be.instanceof(RangeError)
    expect(error).to.have.deep.property('cause', { date })
    expect(error).to.have.property('message', 'Invalid date')
  })
})
