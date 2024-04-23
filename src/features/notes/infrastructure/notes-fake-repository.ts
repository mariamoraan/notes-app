import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";
import { NotesMother } from "../domain/test/notes.mother";

export class NotesFakeRepository implements NotesRepository {
  private notes = NotesMother.getNotes();
  async findAll() {
    return this.notes;
  }
  async create(note: Note) {
    this.notes.push(note);
  }
}
