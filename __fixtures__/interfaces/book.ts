/**
 * @file Test Fixtures - Book
 * @module tests/fixtures/interfaces/Book
 */

import type { Nullable, Simplify } from '#src/types'
import type Author from './author'
import type Publisher from './publisher'

/**
 * Object representing a book.
 */
interface Book {
  /**
   * Book authors.
   */
  authors: Author[]

  /**
   * ISBN number.
   */
  isbn: number

  /**
   * Book publisher.
   */
  publisher?: Nullable<Simplify<Publisher>>

  /**
   * Book readers.
   */
  readers: Map<string, string[]>

  /**
   * Book title.
   */
  title: string
}

export type { Book as default }
