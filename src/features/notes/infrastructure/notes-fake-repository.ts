import { Note } from "../domain/note.entity";
import { NotesRepository } from "../domain/notes-repository";
import { NotesMother } from "../domain/test/notes.mother";

export class NotesFakeRepository implements NotesRepository {
  private notes = NotesMother.getNotes();
  async update(updateNote: Note) {
    this.notes = this.notes.map((note) =>
      note.id !== updateNote.id ? note : updateNote
    );
    return updateNote;
  }
  async find(id: string) {
    const foundNote = this.notes.find((note) => note.id === id);
    if (foundNote) return foundNote;
    throw Error("Note does not exist");
  }
  async findAll() {
    return this.notes;
  }
  async create(note: Note) {
    this.notes.push(note);
  }
}
