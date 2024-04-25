import { Query } from "@/core/use-case/query";
import { Note } from "../domain/note.entity";
import { inject, injectable } from "tsyringe";
import { NOTES_REPOSITORY } from "@/core/dependency-injection/injection-tokens";
import type { NotesRepository } from "../domain/notes-repository";

@injectable()
export class GetNoteQuery implements Query<Note, string> {
  constructor(
    @inject(NOTES_REPOSITORY) private readonly notesRepository: NotesRepository
  ) {}
  async handle(id: string): Promise<Note> {
    const note = await this.notesRepository.find(id);
    return note;
  }
}
