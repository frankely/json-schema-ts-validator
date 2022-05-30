/**
 * String definition
 * For example, a string schema might look like: { type: 'string' }
 * which validates any string value.
 *
 * A schema of { type: 'string', enum: ['red', 'green', 'blue'] } only
 * validates strings that match exactly 'red', 'green' or 'blue'.
 */
export type StringSchema = {
  type: 'string'
  enum?: string[]
}
