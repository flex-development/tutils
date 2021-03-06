/**
 * @file Type Definitions - IsTuple
 * @module tutils/types/IsTuple
 */

/**
 * Determines if `T` is a [tuple][1] type.
 *
 * [1]: https://tutorialsteacher.com/typescript/typescript-tuple
 *
 * @template T - Value type
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
type IsTuple<T> = T extends [infer A] ? T
  : T extends [infer A, infer B] ? T
  : T extends [infer A, infer B, infer C] ? T
  : T extends [infer A, infer B, infer C, infer D] ? T
  : T extends [infer A, infer B, infer C, infer D, infer E] ? T
  : never
/* eslint-enable @typescript-eslint/no-unused-vars */

export default IsTuple
