import { AnyCollection, InsertOneInDb } from '@williamthome/lilidb-wrapper'
import type { ValidateError } from '@williamthome/lilischema'

export class InsertOneInDbSchema<
  T extends AnyCollection[],
> extends InsertOneInDb<ValidateError, T> {}
