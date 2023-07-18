/**
 * @file Type Definitions - AbstractConstructor
 * @module tutils/types/AbstractConstructor
 */

/**
 * An [`abstract class` constructor][1].
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#abstract-construct-signatures
 *
 * @template T - Constructor instance type
 * @template A - Constructor arguments
 */
type AbstractConstructor<
  T,
  A extends readonly unknown[] = any[]
> = abstract new (...args: A) => T

export type { AbstractConstructor as default }
