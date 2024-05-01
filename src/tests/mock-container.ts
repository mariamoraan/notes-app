import { NOTES_REPOSITORY } from "@/core/dependency-injection/injection-tokens";
import "reflect-metadata";
import { container } from "tsyringe";
import { mock } from "jest-mock-extended";
import { NotesRepository } from "@/features/notes/domain/notes-repository";

export const injectIntegrationDependencies = () => {
  const mockedNotesRepositoy = mock<NotesRepository>();
  container.register(NOTES_REPOSITORY, { useValue: mockedNotesRepositoy });
  return {
    mockedNotesRepositoy,
  };
};
