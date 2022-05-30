import { validateArray } from './array.validator'

describe('validateArray', () => {
  test('given an array is passed it should return true', () => {
    const schema: ArraySchema = { type: 'array', items: { type: 'string' } }
    const result = validateArray(`["hello"]`, schema)

    expect(result).toBe(true)
  })

  test('given an array of valid objects is passed it should return true', () => {
    const schema: ArraySchema = {
      type: 'array',
      items: { type: 'object', properties: { name: { type: 'string' } } },
    }
    const result = validateArray(`[{ "name": "hello" }]`, schema)

    expect(result).toBe(true)
  })

  test('given an array of invalid numbers is passed it should return false', () => {
    const schema: ArraySchema = {
      type: 'array',
      items: { type: 'number' },
    }
    const result = validateArray(`["seven"]`, schema)

    expect(result).toBe(false)
  })

  test('given an array of valid arrays of objects is passed it should return true', () => {
    const schema: ArraySchema = {
      type: 'array',
      items: {
        type: 'array',
        items: {
          type: 'object',
          required: ['name'],
          properties: { name: { type: 'string' } },
        },
      },
    }
    const result = validateArray(`[[{ "name": "hello" }],[]]`, schema)

    expect(result).toBe(true)
  })

  test('given an array of valid arrays of objects without required property provided is passed it should return false', () => {
    const schema: ArraySchema = {
      type: 'array',
      items: {
        type: 'array',
        items: {
          type: 'object',
          required: ['lastName'],
          properties: { name: { type: 'string' } },
        },
      },
    }
    const result = validateArray(`[[{ "name": "hello" }],[]]`, schema)

    expect(result).toBe(false)
  })
})
