import { describe, it, expect } from "@jest/globals";
import { DateTimeMother } from "./datetime.mother";
import { DateComparison, DateTime } from "../../../core/datetime/datetime";

describe("Datetime", () => {
  it("Should return date to iso", () => {
    expect(DateTimeMother.date().toIso()).toBe("2023-05-12T00:00:00.000Z");
  });
  it("Should return date to iso date", () => {
    expect(DateTimeMother.date().toIsoDate()).toBe("2023-05-12");
  });
  it("Should return date to millis", () => {
    expect(DateTimeMother.date().toMillis()).toBe(1683849600000);
  });
  it("Should create DateTime from iso", () => {
    const date = DateTime.fromIso(DateTimeMother.iso());
    expect(date).toBeInstanceOf(DateTime);
    expect(date.toIso()).toBe("2023-05-12T00:00:00.000Z");
  });
  it("Should create DateTime from now", () => {
    const date = DateTime.fromNow();
    expect(date).toBeInstanceOf(DateTime);
    expect(date.toIsoDate()).toBe(DateTimeMother.now().toIsoDate());
  });
  it.each([
    {
      date1: DateTimeMother.date(),
      date2: DateTimeMother.date(),
      expected: DateComparison.EQUAL,
      expectedName: "EQUAL",
      comparison: `${DateTimeMother.date().toIsoDate()} & ${DateTimeMother.date().toIsoDate()}`,
    },
    {
      date1: DateTimeMother.date(),
      date2: DateTimeMother.date().plus(1),
      expected: DateComparison.MINOR,
      expectedName: "MINOR",
      comparison: `${DateTimeMother.date().toIsoDate()} & ${DateTimeMother.date()
        .plus(1)
        .toIsoDate()}`,
    },
    {
      date1: DateTimeMother.date().plus(1),
      date2: DateTimeMother.date(),
      expected: DateComparison.MAYOR,
      expectedName: "MAYOR",
      comparison: `${DateTimeMother.date()
        .plus(1)
        .toIsoDate()} & ${DateTimeMother.date().toIsoDate()}`,
    },
  ])(
    "Should return $expectedName for $comparison",
    ({ date1, date2, expected }) => {
      expect(DateTime.compare(date1, date2)).toBe(expected);
    }
  );
});
