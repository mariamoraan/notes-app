import { Note } from "../note";

export class NotesMother {
  static getNotes() {
    return [
      Note.fromPrimitives({ id: "1", title: "Note 1" }),
      Note.fromPrimitives({ id: "2", title: "Note 3" }),
    ];
  }
}
