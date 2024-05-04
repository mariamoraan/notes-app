import { describe, expect, it } from "@jest/globals";
import { NotesMother } from "../domain/NotesMother";
import { CreateNoteCommand } from "@/features/notes/application/create-note.command";
import { NotesLocalRepostory } from "@/features/notes/infrastructure/notes-local-repository";
import { DeleteNoteCommand } from "@/features/notes/application/delete-note.command";
import { UpdateNoteCommand } from "@/features/notes/application/update-note.command";
import { GetNoteQuery } from "@/features/notes/application/get-note.query";

const setUp = () => {
  const notesRepository = new NotesLocalRepostory();
  return { notesRepository };
};

describe("NotesLocalRepository", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should save note", async () => {
    const { notesRepository } = setUp();
    const note = NotesMother.note();
    const getNote = new GetNoteQuery(notesRepository);
    const createNote = new CreateNoteCommand(notesRepository);

    await createNote.handle(note);

    expect(await getNote.handle(note.id)).toEqual(note);
  });
  it("should delete note", async () => {
    const { notesRepository } = setUp();
    const note = NotesMother.note();
    const getNote = new GetNoteQuery(notesRepository);
    const createNote = new CreateNoteCommand(notesRepository);
    const deleteNote = new DeleteNoteCommand(notesRepository);

    await createNote.handle(note);
    await deleteNote.handle(note.id);

    expect(async () => await getNote.handle(note.id)).rejects.toThrow(
      "Note does not exist"
    );
  });
  it("should update note", async () => {
    const { notesRepository } = setUp();
    const note = NotesMother.note();
    const getNote = new GetNoteQuery(notesRepository);
    const updatedNote = NotesMother.note({ title: "New Title" });
    const createNote = new CreateNoteCommand(notesRepository);
    const updateNote = new UpdateNoteCommand(notesRepository);

    await createNote.handle(note);
    await updateNote.handle(updatedNote);

    expect(await getNote.handle(note.id)).toEqual(updatedNote);
  });
});
