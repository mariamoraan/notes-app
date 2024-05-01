import { NOTES_REPOSITORY } from "../../../core/dependency-injection/injection-tokens";
import { Command } from "../../../core/use-case/command";
import type { NotesRepository } from "../domain/notes-repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteNoteCommand implements Command<string> {
  constructor(
    @inject(NOTES_REPOSITORY) private readonly notesRepository: NotesRepository
  ) {}
  async handle(id: string): Promise<void> {
    await this.notesRepository.delete(id);
  }
}
