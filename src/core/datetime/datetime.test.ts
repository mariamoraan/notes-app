import { describe, it, expect } from "@jest/globals";
import { DateComparison, DateTime } from "./datetime";

describe("Datetime", () => {
  it.each([
    {
      dateA: "2020-01-01",
      dateB: "2021-01-01",
      expected: DateComparison.MINOR,
      textualComparison: "minor",
    },
    {
      dateA: "2021-01-01",
      dateB: "2020-01-01",
      expected: DateComparison.MAYOR,
      textualComparison: "mayor",
    },
    {
      dateA: "2020-01-01",
      dateB: "2020-01-01",
      expected: DateComparison.EQUAL,
      textualComparison: "equal",
    },
  ])(
    "should return $dateA is $textualComparison than $dateB",
    ({ dateA, dateB, expected }) => {
      const dateTimeA = DateTime.fromIso(dateA);
      const dateTimeB = DateTime.fromIso(dateB);

      const result = DateTime.compare(dateTimeA, dateTimeB);

      expect(result).toBe(expected);
    }
  );
});
