export class Id {
  private constructor(readonly value: string) {}

  static create({ value }: { value: string }) {
    return new Id(value);
  }

  isEqual(vehicleId: Id) {
    return this.value === vehicleId.value;
  }
}
