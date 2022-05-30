import { validateBoolean } from './boolean.validator'

describe('validateBoolean', () => {
  const booleans = ['true', 'false']

  booleans.forEach(boolean => {
    test(`given ${boolean} is passed it should return true`, () => {
      const schema: BooleanSchema = { type: 'boolean' }
      const result = validateBoolean(boolean, schema)

      expect(result).toBe(true)
    })
  })

  test('given a non boolean is passed it should return false', () => {
    const schema: BooleanSchema = { type: 'boolean' }
    const result = validateBoolean('hello', schema)

    expect(result).toBe(false)
  })
})
