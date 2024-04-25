import { DateTime } from "@/core/datetime/datetime";
import { injectable } from "tsyringe";
import {
  NoteColor,
  NoteColorValue,
} from "./value-objects/note-color.value-object";

export interface NotePrimitives {
  id: string;
  title: string;
  content: string;
  color: NoteColorValue;
  creationDate: DateTime;
  lastEditionDate: DateTime;
}

@injectable()
export class Note {
  id: string;
  title: string;
  content: string;
  color: NoteColor;
  creationDate: DateTime;
  lastEditionDate: DateTime;
  constructor(notePrimitives: NotePrimitives) {
    this.id = notePrimitives.id;
    this.title = notePrimitives.title;
    this.content = notePrimitives.content;
    this.color = NoteColor.create(notePrimitives.color);
    this.creationDate = notePrimitives.creationDate;
    this.lastEditionDate = notePrimitives.lastEditionDate;
  }

  static fromPrimitives(primitives: NotePrimitives): Note {
    return new Note(primitives);
  }

  toPrimitives(): NotePrimitives {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      color: this.color.value,
      creationDate: this.creationDate,
      lastEditionDate: this.lastEditionDate,
    };
  }
}
