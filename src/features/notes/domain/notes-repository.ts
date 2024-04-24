import { Note } from "./note";

export interface NotesRepository {
  create: (note: Note) => Promise<void>;
  findAll: () => Promise<Note[]>;
  find: (id: string) => Promise<Note>;
}
