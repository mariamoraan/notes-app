import { DateTime as LuxonDatetime } from "luxon";

export enum DateComparison {
  "EQUAL" = 0,
  "MINOR" = -1,
  "MAYOR" = 1,
}

export class DateTime {
  constructor(private readonly datetime: LuxonDatetime) {}
  toIso(): string | null {
    return this.datetime.toUTC().toISO();
  }
  toIsoDate(): string | null {
    return this.datetime.toUTC().toISODate();
  }
  toMillis(): number {
    return this.datetime.toUTC().toMillis();
  }
  plus(days: number): DateTime {
    return new DateTime(this.datetime.plus({ days }));
  }
  static fromIso(isoDate: string): DateTime {
    const luxonDate = LuxonDatetime.fromISO(isoDate);
    return new DateTime(luxonDate);
  }
  static fromNow(): DateTime {
    return new DateTime(LuxonDatetime.now());
  }
  static compare(date1: DateTime, date2: DateTime): DateComparison {
    if (date1.toMillis() < date2.toMillis()) return DateComparison.MAYOR;
    if (date1.toMillis() > date2.toMillis()) return DateComparison.MAYOR;
    return DateComparison.EQUAL;
  }
}
