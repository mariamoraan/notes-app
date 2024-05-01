import { Note } from "../domain/note.entity";
import { NotesRepository } from "../domain/notes-repository";
import { NoteLocalDTO } from "./notes-local.dto";
import { NotesLocalMapper } from "./notes-local.mapper";

export class NotesLocalRepostory implements NotesRepository {
  private notesKey = "NOTES";

  async update(updateNote: Note) {
    const notes = await this.findAll();
    const updatedNotes = notes.map((note) =>
      note.id !== updateNote.id ? note : updateNote
    );
    localStorage.setItem(
      this.notesKey,
      JSON.stringify(
        updatedNotes.map((note) => ({
          ...note.toPrimitives(),
          lastEditionDate: note.lastEditionDate.toIso(),
          creationDate: note.creationDate.toIso(),
        }))
      )
    );
    return updateNote;
  }
  async delete(id: string) {
    const notes = await this.findAll();
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem(
      this.notesKey,
      JSON.stringify(
        updatedNotes.map((note) => ({
          ...note.toPrimitives(),
          lastEditionDate: note.lastEditionDate.toIso(),
          creationDate: note.creationDate.toIso(),
        }))
      )
    );
  }
  async find(id: string) {
    const notes = await this.findAll();
    const foundNote = notes.find((note) => note.id === id);
    if (foundNote) return foundNote;
    throw Error("Note does not exist");
  }
  async findAll() {
    const localNotes = (
      JSON.parse(localStorage.getItem(this.notesKey) || "[]") as NoteLocalDTO[]
    ).map((note) => NotesLocalMapper.map(note));
    return localNotes;
  }
  async create(note: Note) {
    const currentNotes = await this.findAll();
    currentNotes.push(note);
    localStorage.setItem(
      this.notesKey,
      JSON.stringify(
        currentNotes.map((note) => ({
          ...note.toPrimitives(),
          lastEditionDate: note.lastEditionDate.toIso(),
          creationDate: note.creationDate.toIso(),
        }))
      )
    );
  }
}
