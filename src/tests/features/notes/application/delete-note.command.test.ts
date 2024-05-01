import { describe, expect, it } from "@jest/globals";
import { mock } from "jest-mock-extended";
import { NotesMother } from "../domain/NotesMother";
import { NotesRepository } from "@/features/notes/domain/notes-repository";
import { DeleteNoteCommand } from "@/features/notes/application/delete-note.command";

describe("DeleteNoteCommand", () => {
  it("DeleteNote should call to the delete emethod of the injected repository with the note id", () => {
    const notesRepository = mock<NotesRepository>();
    const deleteNote = new DeleteNoteCommand(notesRepository);
    const note = NotesMother.note();

    deleteNote.handle(note.id);

    expect(notesRepository.delete).toHaveBeenCalledWith(note.id);
  });
});
