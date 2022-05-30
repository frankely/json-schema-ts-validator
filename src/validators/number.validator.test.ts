import { validateNumber } from './number.validator'

describe('validateNumber', () => {
  test('given a number is passed it should return true', () => {
    const schema: NumberSchema = { type: 'number' }
    const result = validateNumber('5', schema)

    expect(result).toBe(true)
  })

  test('given a non number is passed it should return false', () => {
    const schema: NumberSchema = { type: 'number' }
    const result = validateNumber('hello', schema)

    expect(result).toBe(false)
  })
})
