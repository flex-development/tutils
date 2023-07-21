/**
 * @file Test Fixtures - VEHICLES_ARRAY
 * @module fixtures/VEHICLES_ARRAY
 */

import cast from '#src/utils/cast'
import values from '#src/utils/values'
import type Vehicle from './types/vehicle'
import VEHICLES_DICTIONARY from './vehicles-dictionary'

export default cast<readonly [Vehicle, Vehicle]>(values(VEHICLES_DICTIONARY))
