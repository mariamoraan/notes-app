import { sleep } from "@/core/sleep/sleep";
import { Note } from "../domain/note.entity";
import { NotesRepository } from "../domain/notes-repository";
import { NotesMother } from "../domain/test/notes.mother";
import { mockHttpResponseTime } from "@/core/sleep/mock-http-response-time";

export class NotesFakeRepository implements NotesRepository {
  private notes = NotesMother.getNotes();
  async update(updateNote: Note) {
    this.notes = this.notes.map((note) =>
      note.id !== updateNote.id ? note : updateNote
    );
    await mockHttpResponseTime();
    return updateNote;
  }
  async find(id: string) {
    const foundNote = this.notes.find((note) => note.id === id);
    await mockHttpResponseTime();
    if (foundNote) return foundNote;
    throw Error("Note does not exist");
  }
  async findAll() {
    await mockHttpResponseTime();
    return this.notes;
  }
  async create(note: Note) {
    await mockHttpResponseTime();
    this.notes.push(note);
  }
}
