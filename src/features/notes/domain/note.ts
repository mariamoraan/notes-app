import { injectable } from "tsyringe";

interface NotePrimitives {
  id: string;
  title: string;
}

@injectable()
export class Note {
  id: string;
  title: string;
  constructor(notePrimitives: NotePrimitives) {
    this.id = notePrimitives.id;
    this.title = notePrimitives.title;
  }

  static fromPrimitives(primitives: NotePrimitives) {
    return new Note(primitives);
  }

  toPrimitives() {
    return {
      id: this.id,
      title: this.title,
    };
  }
}
