/**
 * @file Type Definitions - MethodDecorator
 * @module tutils/types/MethodDecorator
 */

import type { PropertyDescriptor } from '#src/interfaces'
import type DecoratorTarget from './decorator-target'
import type Fn from './fn'
import type OwnPropertyKey from './property-key-own'

/**
 * A method decorator.
 *
 * @see {@linkcode DecoratorTarget}
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
 *
 * @template T - Property descriptor value type
 * @template U - Class constructor or instance type
 *
 * @param {U} target - Class declaration or prototype
 * @param {OwnPropertyKey} key - Method name
 * @param {PropertyDescriptor<T>} descriptor - Property descriptor for `key`
 * @return {PropertyDescriptor<T> | void} Property descriptor or `undefined`
 */
type MethodDecorator<
  T extends Fn = Fn,
  U extends DecoratorTarget = DecoratorTarget
> = (
  target: U,
  key: OwnPropertyKey,
  descriptor: PropertyDescriptor<T>
) => PropertyDescriptor<T> | void

export type { MethodDecorator as default }
