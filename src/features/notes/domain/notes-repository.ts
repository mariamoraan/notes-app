import { Note } from "./note.entity";

export interface NotesRepository {
  create: (note: Note) => Promise<void>;
  findAll: () => Promise<Note[]>;
  find: (id: string) => Promise<Note>;
  update: (note: Note) => Promise<Note>;
  delete: (id: string) => Promise<void>;
}
