import { DateTime } from "../../../../core/datetime/datetime";
import {
  Note,
  NotePrimitives,
} from "../../../../features/notes/domain/note.entity";

export class NotesMother {
  static note(note?: Partial<NotePrimitives>) {
    const baseNotePrimitives: NotePrimitives = {
      id: "6f9e2c8a-b88e-4a",
      title: "Grocery List",
      content: "Milk\nEggs\nBread\nBananas\nApples",
      color: { name: "PINK", color: "#FF2C7A" },
      creationDate: DateTime.fromIso("2024-04-28T00:24:00.000Z"),
      lastEditionDate: DateTime.fromIso("2024-04-28T00:24:00.000Z"),
    };
    return Note.fromPrimitives({ ...baseNotePrimitives, ...note });
  }
}
