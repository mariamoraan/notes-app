import { ValueObject } from "@/core/domain/value-object";

type ColorName = "PINK" | "DARK_BLUE" | "YELLOW" | "PURPLE" | "GREEN" | "BLUE";

export interface NoteColorValue {
  name: ColorName;
  color: string;
}

export class NoteColor extends ValueObject<NoteColorValue> {
  static noteColors: Record<ColorName, NoteColorValue> = {
    PINK: { name: "PINK", color: "#FF2C7A" },
    DARK_BLUE: { name: "DARK_BLUE", color: "#3359F7" },
    YELLOW: { name: "YELLOW", color: "#FFC227" },
    PURPLE: { name: "PURPLE", color: "#AF62FF" },
    GREEN: { name: "GREEN", color: "#0FC613" },
    BLUE: { name: "BLUE", color: "#35BDF7" },
  };
  static noteColorsList: NoteColorValue[] = Object.values(this.noteColors);
  static create(value: NoteColorValue): NoteColor {
    return new NoteColor(value);
  }
}
