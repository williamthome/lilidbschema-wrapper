import { AnyCollection, InsertManyInDb } from '@williamthome/lilidb-wrapper'
import type { ValidateError } from '@williamthome/lilischema'

export class InsertManyInDbSchema<
  T extends AnyCollection[],
> extends InsertManyInDb<ValidateError, T> {}
