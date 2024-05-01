import { DateTime } from "@/core/datetime/datetime";
import { Note } from "../domain/note.entity";
import { NoteLocalDTO } from "./notes-local.dto";
import { NoteColorValue } from "../domain/value-objects/note-color.value-object";

export class NotesLocalMapper {
  static map(dto: NoteLocalDTO): Note {
    return Note.fromPrimitives({
      id: dto.id,
      title: dto.title,
      content: dto.content,
      color: dto.color as NoteColorValue,
      creationDate: DateTime.fromIso(dto.creationDate),
      lastEditionDate: DateTime.fromIso(dto.lastEditionDate),
    });
  }
}
