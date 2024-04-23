import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";

export class NotesLocalRepository implements NotesRepository {
  async create(note: Note) {
    alert(note.title);
  }
}
