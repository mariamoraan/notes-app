import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";
import { NotesMother } from "../domain/test/notes.mother";

export class NotesLocalRepository implements NotesRepository {
  async findAll() {
    return NotesMother.getNotes();
  }
  async create(note: Note) {
    alert(note.title);
  }
}
