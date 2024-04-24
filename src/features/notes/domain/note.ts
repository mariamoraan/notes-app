import { DateTime } from "@/core/datetime/datetime";
import { injectable } from "tsyringe";

export interface NotePrimitives {
  id: string;
  title: string;
  content: string;
  color: string;
  creationDate: DateTime;
  lastEditionDate: DateTime;
}

@injectable()
export class Note {
  id: string;
  title: string;
  content: string;
  color: string;
  creationDate: DateTime;
  lastEditionDate: DateTime;
  constructor(notePrimitives: NotePrimitives) {
    this.id = notePrimitives.id;
    this.title = notePrimitives.title;
    this.content = notePrimitives.content;
    this.color = notePrimitives.color;
    this.creationDate = notePrimitives.creationDate;
    this.lastEditionDate = notePrimitives.lastEditionDate;
  }

  static noteColors: { [key: string]: { name: string; color: string } } = {
    PINK: { name: "PINK", color: "#FF2C7A" },
    DARK_BLUE: { name: "DARK_BLUE", color: "#3359F7" },
    YELLOW: { name: "YELLOW", color: "#FFC227" },
    PURPLE: { name: "PURPLE", color: "#AF62FF" },
    GREEN: { name: "GREEN", color: "#0FC613" },
    BLUE: { name: "BLUE", color: "#35BDF7" },
  };
  static fromPrimitives(primitives: NotePrimitives): Note {
    return new Note(primitives);
  }

  toPrimitives(): NotePrimitives {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      color: this.color,
      creationDate: this.creationDate,
      lastEditionDate: this.lastEditionDate,
    };
  }
}
