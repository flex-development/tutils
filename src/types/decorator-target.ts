/**
 * @file Type Definitions - MethodDecorator
 * @module tutils/types/MethodDecorator
 */

import type AbstractConstructor from './constructor-abstract'
import type Objectify from './objectify'

/**
 * A class declaration or prototype passed as a decorator target.
 *
 * @see https://mirone.me/a-complete-guide-to-typescript-decorator
 */
type DecoratorTarget = AbstractConstructor<any> | Objectify<any>

export type { DecoratorTarget as default }
