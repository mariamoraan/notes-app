import { DateTime as LuxonDatetime } from "luxon";

enum DateComparison {
  "EQUAL" = 0,
  "MINOR" = -1,
  "MAYOR" = 1,
}

export class Datetime {
  constructor(private readonly datetime: LuxonDatetime) {}
  toIso() {
    return this.datetime.toUTC().toISO();
  }
  toIsoDate() {
    return this.datetime.toUTC().toISODate();
  }
  toMillis() {
    return this.datetime.toUTC().toMillis();
  }
  static fromIso(isoDate: string) {
    const luxonDate = LuxonDatetime.fromISO(isoDate);
    return new Datetime(luxonDate);
  }
  static fromNow() {
    return new Datetime(LuxonDatetime.now());
  }
  static compare(date1: Datetime, date2: Datetime): DateComparison {
    if (date1.toMillis() < date2.toMillis()) return DateComparison.MINOR;
    if (date1.toMillis() > date2.toMillis()) return DateComparison.MAYOR;
    return DateComparison.EQUAL;
  }
}
