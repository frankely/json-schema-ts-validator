import { ObjectSchema } from '../schemas/object.schema'
import { validateObject } from './object.validator'

describe('validateObject', () => {
  test('given a valid object is passed it should return true', () => {
    const schema: ObjectSchema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
      },
    }
    const result = validateObject('{"name": "Kevin"}', schema)

    expect(result).toBe(true)
  })

  test('given a object is passed without the required fields provided in the data it should return false', () => {
    const schema: ObjectSchema = {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
        lastName: { type: 'string' },
      },
    }
    const result = validateObject('{"lastName": "Malone"}', schema)

    expect(result).toBe(false)
  })

  test('given a object is passed with the required fields provided in the data it should return true', () => {
    const schema: ObjectSchema = {
      type: 'object',
      required: ['lastName'],
      properties: {
        name: { type: 'string' },
        lastName: { type: 'string' },
      },
    }
    const result = validateObject('{"lastName": "Malone"}', schema)

    expect(result).toBe(true)
  })
})
