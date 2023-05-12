/**
 * @file Test Fixtures - Book
 * @module tests/fixtures/Book
 */

import type Author from './author.interface'
import type Publisher from './publisher.interface'

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
  publisher: Publisher

  /**
   * Book title.
   */
  title: string
}

export type { Book as default }
