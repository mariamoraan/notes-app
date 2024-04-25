import { Query } from "@/core/use-case/query";
import { Note } from "../domain/note.entity";
import { inject, injectable } from "tsyringe";
import { NOTES_REPOSITORY } from "@/core/dependency-injection/injection-tokens";
import type { NotesRepository } from "../domain/notes-repository";

@injectable()
export class GetNotesQuery implements Query<Note[]> {
  constructor(
    @inject(NOTES_REPOSITORY) private readonly notesRepository: NotesRepository
  ) {}
  async handle(): Promise<Note[]> {
    const notes = await this.notesRepository.findAll();
    return notes;
  }
}
