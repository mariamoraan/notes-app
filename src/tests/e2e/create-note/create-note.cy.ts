import { CreateNotePo } from "./create-note.po";
import { NoteDto } from "../dto/note.dto";

describe("Note Creation", () => {
  it("should create a note", () => {
    cy.fixture("note").then((note: NoteDto) => {
      CreateNotePo.openCreationPage();
      CreateNotePo.fillNoteForm(note);
      CreateNotePo.saveNote();
      CreateNotePo.goBackToNotesList();
      CreateNotePo.checkNoteHasBeenCreated(note);
    });
  });
});
