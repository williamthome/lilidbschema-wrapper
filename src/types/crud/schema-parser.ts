import type { IParser } from '@williamthome/lilidb-wrapper'
import type {
  ExtractCompleteSchema,
  ExtractSchemaForCreation,
  Schema,
} from '@williamthome/lilischema'

export type ISchemaParser<TSchema extends Schema<unknown, any>> = IParser<
  ExtractSchemaForCreation<TSchema>,
  ExtractCompleteSchema<TSchema>
>
