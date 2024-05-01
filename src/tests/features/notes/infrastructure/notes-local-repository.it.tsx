import { describe, expect, it } from "@jest/globals";
import { NotesMother } from "../domain/NotesMother";
import { CreateNoteCommand } from "@/features/notes/application/create-note.command";
import { NotesLocalRepostory } from "@/features/notes/infrastructure/notes-local-repository";
import { DeleteNoteCommand } from "@/features/notes/application/delete-note.command";
import { UpdateNoteCommand } from "@/features/notes/application/update-note.command";

const setUp = () => {
  const notesRepository = new NotesLocalRepostory();
  return { notesRepository };
};

describe("NotesLocaalRepository", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should save note in local storage", async () => {
    const { notesRepository } = setUp();
    const note = NotesMother.note();
    const createNote = new CreateNoteCommand(notesRepository);
    await createNote.handle(note);
    expect(localStorage.getItem("NOTES")?.includes(note.id)).toBeTruthy();
  });
  it("should delete note", async () => {
    const { notesRepository } = setUp();
    const note = NotesMother.note();
    const createNote = new CreateNoteCommand(notesRepository);
    const deleteNote = new DeleteNoteCommand(notesRepository);

    await createNote.handle(note);
    await deleteNote.handle(note.id);

    expect(localStorage.getItem("NOTES")?.includes(note.id)).toBeFalsy();
  });
  it("should update note", async () => {
    const { notesRepository } = setUp();
    const note = NotesMother.note();
    const updatedNote = NotesMother.note({ title: "New Title" });
    const createNote = new CreateNoteCommand(notesRepository);
    const updateNote = new UpdateNoteCommand(notesRepository);

    await createNote.handle(note);
    await updateNote.handle(updatedNote);

    expect(
      localStorage.getItem("NOTES")?.includes(updatedNote.title)
    ).toBeTruthy();
  });
});
