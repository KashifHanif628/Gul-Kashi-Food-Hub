import { type SchemaTypeDefinition } from 'sanity'
import { food } from './food'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food],
}
