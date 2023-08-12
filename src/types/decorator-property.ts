/**
 * @file Type Definitions - PropertyDecorator
 * @module tutils/types/PropertyDecorator
 */

import type DecoratorTarget from './decorator-target'
import type OwnPropertyKey from './property-key-own'

/**
 * A property decorator.
 *
 * @see {@linkcode DecoratorTarget}
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 *
 * @template T - Class constructor or instance type
 *
 * @param {T} target - Class declaration or prototype
 * @param {OwnPropertyKey} key - Property name
 * @return {void} Nothing
 */
type PropertyDecorator<T extends DecoratorTarget = DecoratorTarget> = (
  target: T,
  key: OwnPropertyKey
) => void

export type { PropertyDecorator as default }
