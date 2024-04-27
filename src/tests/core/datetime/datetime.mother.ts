import { DateTime } from "../../../core/datetime/datetime";

export class DateTimeMother {
  static now(): DateTime {
    return DateTime.fromIso("2023-03-31T00:00:00.000Z");
  }
  static date(): DateTime {
    return DateTime.fromIso("2023-05-12T00:00:00.000Z");
  }
  static iso(): string {
    return "2023-05-12";
  }
}
