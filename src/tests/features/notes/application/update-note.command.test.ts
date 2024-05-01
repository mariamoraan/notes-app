import { describe, expect, it } from "@jest/globals";
import { mock } from "jest-mock-extended";
import { NotesMother } from "../domain/NotesMother";
import { NotesRepository } from "@/features/notes/domain/notes-repository";
import { UpdateNoteCommand } from "@/features/notes/application/update-note.command";

describe("UpdateNoteCommand", () => {
  it("UpdateNote should call to the update emethod of the injected repository with the updated note", () => {
    const notesRepository = mock<NotesRepository>();
    const updateNote = new UpdateNoteCommand(notesRepository);
    const note = NotesMother.note();

    updateNote.handle(note);

    expect(notesRepository.update).toHaveBeenCalledWith(note);
  });
});
