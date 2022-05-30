import { validateString } from './string.validator'

describe('validateString', () => {
  test('given a string is passed without enum constraints it should return true', () => {
    const schema: StringSchema = { type: 'string' }
    const result = validateString('hello', schema)

    expect(result).toBe(true)
  })

  test('given a string is passed with a enum constraint of ["red", "green", "blue"] it should return false when passing "yellow"', () => {
    const schema: StringSchema = {
      type: 'string',
      enum: ['red', 'green', 'blue'],
    }
    const result = validateString('yellow', schema)

    expect(result).toBe(false)
  })

  const colors = ['red', 'green', 'blue']

  colors.forEach((color, _, colors) => {
    test(`given a string is passed with a enum constraint of [${colors}] it should return true when passing '${color}'`, () => {
      const schema: StringSchema = {
        type: 'string',
        enum: colors,
      }
      const result = validateString(color, schema)

      expect(result).toBe(true)
    })
  })
})
