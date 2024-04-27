import { describe, expect, it } from "@jest/globals";
import { mock } from "jest-mock-extended";
import { NotesMother } from "../domain/NotesMother";
import { NotesRepository } from "@/features/notes/domain/notes-repository";
import { CreateNoteCommand } from "@/features/notes/application/create-note.command";

describe("CreateNote", () => {
  it("CreateNote should call to the creat emethod of the injected repository with the new note", () => {
    const notesRepository = mock<NotesRepository>();
    const createNote = new CreateNoteCommand(notesRepository);
    const note = NotesMother.note();

    createNote.handle(note);

    expect(notesRepository.create).toHaveBeenCalledWith(note);
  });
});
