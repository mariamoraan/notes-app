import { DateTime as LuxonDatetime } from "luxon";

enum DateComparison {
  "EQUAL" = 0,
  "MINOR" = -1,
  "MAYOR" = 1,
}

export class DateTime {
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
    return new DateTime(luxonDate);
  }
  static fromNow() {
    return new DateTime(LuxonDatetime.now());
  }
  static compare(date1: DateTime, date2: DateTime): DateComparison {
    if (date1.toMillis() < date2.toMillis()) return DateComparison.MINOR;
    if (date1.toMillis() > date2.toMillis()) return DateComparison.MAYOR;
    return DateComparison.EQUAL;
  }
}
