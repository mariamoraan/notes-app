import { Note } from "./note";

export interface NotesRepository {
  create: (note: Note) => Promise<void>;
}
