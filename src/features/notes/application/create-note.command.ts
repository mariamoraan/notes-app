import { NOTES_REPOSITORY } from "../../../core/dependency-injection/injection-tokens";
import { Command } from "../../../core/use-case/command";
import { Note } from "../domain/note.entity";
import type { NotesRepository } from "../domain/notes-repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateNoteCommand implements Command<Note> {
  constructor(
    @inject(NOTES_REPOSITORY) private readonly notesRepository: NotesRepository
  ) {}
  async handle(note: Note): Promise<void> {
    await this.notesRepository.create(note);
  }
}
