import { NOTES_REPOSITORY } from "@/core/dependency-injection/injection-tokens";
import "reflect-metadata";
import { container } from "tsyringe";
import { NotesLocalRepostory } from "@/features/notes/infrastructure/notes-local-repository";

export const injectIntegrationDependencies = () => {
  const notesRepository = new NotesLocalRepostory();
  container.register(NOTES_REPOSITORY, { useValue: notesRepository });
  return {
    notesRepository,
  };
};
