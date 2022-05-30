import { validateBoolean } from './boolean.validator'
import { validateNumber } from './number.validator'
import { validateObject } from './object.validator'
import { validateString } from './string.validator'

export function validateArray(value: string, schema: ArraySchema): boolean {
  const arrayWrapper = `{ "${schema.items.type}": ${value} }`
  const array = JSON.parse(arrayWrapper)

  if (!Array.isArray(array[schema.items.type])) {
    return false
  }

  const items = array[schema.items.type] as []

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    switch (schema.items.type) {
      case 'string': {
        if (!validateString(item, schema.items)) {
          return false
        }
        break
      }
      case 'number': {
        if (!validateNumber(item, schema.items)) {
          return false
        }
        break
      }
      case 'boolean': {
        if (!validateBoolean(item, schema.items)) {
          return false
        }
        break
      }
      case 'object': {
        if (!validateObject(JSON.stringify(item), schema.items)) {
          return false
        }
        break
      }
      case 'array': {
        if (!validateArray(JSON.stringify(item), schema.items)) {
          return false
        }
        break
      }
      default: {
        return false
      }
    }
  }

  return true
}
