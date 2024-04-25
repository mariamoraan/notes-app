export abstract class ValueObject<T> {
  protected constructor(readonly value: T) {}

  static validateAndThrowErrors(errors: Error[]): void {
    if (errors.length > 0) {
      throw new AggregateError(errors);
    }
  }
}
