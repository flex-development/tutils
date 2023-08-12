/**
 * @file Type Definitions - ClassDecorator
 * @module tutils/types/ClassDecorator
 */

import type Constructor from './constructor'
import type AbstractConstructor from './constructor-abstract'

/**
 * A class decorator.
 *
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
 *
 * @template T - Class type
 *
 * @param {T} target - Class declaration
 * @return {T | void} Class declaration or `undefined`
 */
type ClassDecorator<T extends AbstractConstructor<any> = Constructor<any>> = (
  target: T
) => T | void

export type { ClassDecorator as default }
