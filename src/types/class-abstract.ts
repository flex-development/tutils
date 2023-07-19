/**
 * @file Type Definitions - AbstractClass
 * @module tutils/types/AbstractClass
 */

import type AbstractConstructor from './constructor-abstract'
import type Omit from './omit'

/**
 * An [`abstract class`][1].
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/2/classes#abstract-classes-and-members
 *
 * @template T - Class instance type
 * @template A - Constructor arguments
 */
type AbstractClass<T, A extends readonly unknown[] = any[]> = Omit<
  AbstractConstructor<T, A>,
  'prototype'
> & { prototype: T }

export type { AbstractClass as default }
