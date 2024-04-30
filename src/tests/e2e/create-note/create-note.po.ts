import { NoteDto } from "../dto/note.dto";

export class CreateNotePo {
  static openCreationPage() {
    cy.visit("/");
    cy.get('a[href="/new-note"]').click();
  }
  static fillNoteForm(note: NoteDto) {
    cy.get('[data-testid="note-title-input"]').type(note.title);
    cy.get('[data-testid="note-content-input"]').type(note.content);
  }
  static saveNote() {
    cy.get('[data-testid="save-note-button"]').click();
  }
  static goBackToNotesList() {
    cy.get('[data-testid="go-back-button"]').click();
  }
  static checkNoteHasBeenCreated(note: NoteDto) {
    cy.contains(note.title);
  }
}
