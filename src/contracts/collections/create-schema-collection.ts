import type { Collection } from '@williamthome/lilidb-wrapper'
import { CreateCollection } from '@williamthome/lilidb-wrapper/dist/contracts/collections'
import type { ICreateCollection } from '@williamthome/lilidb-wrapper/dist/protocols/collections'
import type {
  ExtractCompleteSchema,
  ExtractSchemaForCreation,
  ExtractSchemaForModify,
} from '@williamthome/lilischema'

export class CreateSchemaCollection {
  private readonly _factory: ICreateCollection
  constructor() {
    this._factory = new CreateCollection()
  }
  create<CollectionName extends string, TSchema>(
    collectionName: CollectionName,
    schema: TSchema,
  ): Collection<
    CollectionName,
    ExtractCompleteSchema<TSchema>,
    ExtractSchemaForModify<TSchema>,
    ExtractSchemaForCreation<TSchema>
  > {
    return this._factory
      .create(collectionName)
      .defineTypes<
        ExtractCompleteSchema<typeof schema>,
        ExtractSchemaForModify<typeof schema>,
        ExtractSchemaForCreation<typeof schema>
      >()
  }
}
