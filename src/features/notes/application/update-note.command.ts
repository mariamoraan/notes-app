import { NOTES_REPOSITORY } from "../../../core/dependency-injection/injection-tokens";
import { Command } from "../../../core/use-case/command";
import { Note } from "../domain/note";
import type { NotesRepository } from "../domain/notes-repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateNoteCommand implements Command<Note> {
  constructor(
    @inject(NOTES_REPOSITORY) private readonly notesRepository: NotesRepository
  ) {}
  async handle(note: Note): Promise<void> {
    await this.notesRepository.update(note);
  }
}
