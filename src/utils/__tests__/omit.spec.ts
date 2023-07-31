/**
 * @file Unit Tests - omit
 * @module tutils/utils/tests/unit/omit
 */

import VEHICLE, { VEHICLE_TAG } from '#fixtures/vehicle'
import type { ObjectPlain } from '#src/types'
import { DECORATOR_REGEX } from '@flex-development/decorator-regex'
import { dedent } from 'ts-dedent'
import at from '../at'
import isObjectPlain from '../is-object-plain'
import keys from '../keys'
import testSubject from '../omit'

describe('unit:utils/omit', () => {
  let code: string

  beforeAll(() => {
    code = dedent`
      @Controller(Endpoint.HEALTH)
      @ApiTags(Subdomain.HEALTH)
      class HealthController {}
    `
  })

  it('should return new object with properties in keys removed', () => {
    // Arrange
    const cases: [...Parameters<typeof testSubject>, ObjectPlain][] = [
      [null, [], {}],
      [undefined, keys(VEHICLE), {}],
      ['0.2', [1], { '0': '0', '2': '2' }],
      [VEHICLE, ['drivers', 'vrm'], VEHICLE],
      [VEHICLE, [VEHICLE_TAG, 'make', 'model', 'year'], { vin: VEHICLE.vin }],
      [
        at([...code.matchAll(DECORATOR_REGEX)], 0),
        ['groups', 'index', 'input', 2],
        {
          '0': '@Controller(Endpoint.HEALTH)',
          '1': 'Controller'
        }
      ]
    ]

    // Act + Expect
    cases.forEach(([target, keys, expected]) => {
      expect(testSubject(target, keys))
        .to.satisfy(isObjectPlain)
        .and.eql(expected)
        .but.not.equal(target)
    })
  })
})
