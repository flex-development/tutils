/**
 * @file Type Definitions - ParameterDecorator
 * @module tutils/types/ParameterDecorator
 */

import type DecoratorTarget from './decorator-target'
import type Optional from './optional'
import type OwnPropertyKey from './property-key-own'

/**
 * A parameter decorator.
 *
 * @see {@linkcode DecoratorTarget}
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators
 *
 * @template T - Class constructor or instance type
 *
 * @param {T} target - Class declaration or prototype
 * @param {Optional<OwnPropertyKey>} key - Class method name
 * @param {number} index - Ordinal index of parameter
 * @return {void} Nothing
 */
type ParameterDecorator<T extends DecoratorTarget = DecoratorTarget> = (
  target: T,
  key: Optional<OwnPropertyKey>,
  index: number
) => void

export type { ParameterDecorator as default }
