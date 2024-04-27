import { NotesFakeRepository } from "@/features/notes/infrastructure/notes-fake-repository";
import { describe, expect, it } from "@jest/globals";
import { NotesMother } from "../domain/NotesMother";

describe("NotesFakeRepository", () => {
  it("NotesFakeRepository should create a note", async () => {
    const notesFakeRepository = new NotesFakeRepository();
    const note = NotesMother.note();

    await notesFakeRepository.create(note);

    expect(await notesFakeRepository.find(note.id)).toEqual(note);
  });
});
